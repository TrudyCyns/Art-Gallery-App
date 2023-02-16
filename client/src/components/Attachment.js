import { useEffect, useState } from 'react';

import { createFormData, uploadPhoto } from './../helpers/requests';
import { useDispatch } from 'react-redux';

import { updatePhotoData } from './../store/photoSlice';

export default function Attachment({ name }) {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const [uploadMessage, setUploadMessage] = useState('');

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (!file) {
      return;
    }

    console.log('File in state: ', file);

    let fileInfo = createFormData(file);

    uploadPhoto(fileInfo, setUrl, setUploadMessage);

    dispatch(updatePhotoData(url));
  }, [file, url, dispatch]);

  return (
    <div className="mb-3">
      {uploadMessage && (
        <div className="alert alert-success py-1" role="alert">
          {uploadMessage}
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
