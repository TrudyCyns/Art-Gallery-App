import { useEffect, useState } from 'react';

import { createFormData, uploadPhoto } from './../helpers/requests';
import { useDispatch } from 'react-redux';

import { updatePhotoData } from './../store/photoSlice';

export default function Attachment({ name }) {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');

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

    uploadPhoto(fileInfo, setUrl);

    dispatch(updatePhotoData(url));
    console.log('Post Dispatch URL: ',url);
  }, [file, url, dispatch]);

  // useEffect(() => {
  //   if(url) {
  //   }
  // })

  return (
    <div className="mb-3">
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
