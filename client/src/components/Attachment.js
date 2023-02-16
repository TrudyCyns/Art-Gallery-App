import { useEffect, useState } from 'react';

import { createFormData, uploadPhoto } from './../helpers/requests';
import { useDispatch } from 'react-redux';

import { updatePhotoData } from './../store/photoSlice';

export default function Attachment({ name }) {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const [uploadMessage, setUploadMessage] = useState('');
  const [fileSizeMessage, setFileSizeMessage] = useState('');

  const maxFileSize = 2 * 1024 * 1024;

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.size > maxFileSize) {
      setFileSizeMessage('File size exceeds 2 MB');
      return;
    }

    setFile(selectedFile);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (!file) {
      return;
    }

    let fileInfo = createFormData(file);

    uploadPhoto(fileInfo, setUrl, setUploadMessage);

    dispatch(updatePhotoData(url));
  }, [file, url, dispatch]);

  useEffect(() => {
    if (uploadMessage) {
      setFileSizeMessage('');
    }
  }, [uploadMessage]);

  return (
    <div className="mb-3">
      {uploadMessage && (
        <div className="alert alert-success py-1" role="alert">
          {uploadMessage}
        </div>
      )}
      {fileSizeMessage && (
        <div className="alert alert-warning py-1" role="alert">
          {fileSizeMessage}. Please upload a smaller file
        </div>
      )}
      <input
        type="file"
        className="form-control"
        name={name}
        accept=".png, .jpg, .jpeg"
        onChange={handleChange}
      />
    </div>
  );
}
