import axios from 'axios';

const baseUrl = 'http://localhost:5000/api';

const uploadPhoto = async (data, setUrl) => {
  try {
    const res = await axios.post(`${baseUrl}/photos/upload`, data, {
      headers: { Accept: '*/*', 'Content-Type': 'multipart/form-data' },
    });
    console.log(res.data);

    const photoUrl = res.data.url;

    console.log('uploadPhoto photoUrl: ', photoUrl);

    setUrl(photoUrl);
  } catch (error) {
    alert(error);
    console.error(error);
  }
};

const postPhotoDetails = async (data) => {
  try {
    const res = await axios.post(`${baseUrl}/photos/new`, data, {
      headers: { Accept: '*/*', 'Content-Type': 'application/json' },
    });

    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};

const getPhotos = async (setPhotos) => {
  try {
    const res = await axios.get(`${baseUrl}/photos`, {
      headers: { Accept: '*/*' },
    });

    setPhotos(res.data.photos);
  } catch (error) {
    console.error(error);
  }
};

const createFormData = (file) => {
  const data = new FormData();

  data.append('file', file);

  return data;
};

const registerUser = async (data) => {
  try {
    const res = await axios.post(`${baseUrl}/users/new`, data, {
      headers: { Accept: '*/*', 'Content-Type': 'application/json' },
    });

    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};

export {
  postPhotoDetails,
  uploadPhoto,
  createFormData,
  getPhotos,
  registerUser,
};