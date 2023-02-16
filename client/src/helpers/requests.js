import axios from 'axios';
import { store } from './../store';
import { updateUserData } from '../store/authSlice.js';

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

const loginUser = async (data, navigate) => {
  try {
    const res = await axios.post(`${baseUrl}/login`, data, {
      headers: { Accept: '*/*', 'Content-Type': 'application/json' },
    });

    console.log(res.data);

    if (res.data.message === 'User Successfully logged in') {
      store.dispatch(updateUserData(res.data.user));
      navigate('/dashboard');
    } else {
      alert(res.data.message);
    }
  } catch (error) {
    console.error(error);
  }
};

const getUserPhotos = async (data, setUserPhotos) => {
  try {
    const res = await axios.get(`${baseUrl}/user/photos`, {
      params: { uploadedBy: data },
      headers: { Accept: '*/*' },
    });

    console.log('User Photos ResData: ', res.data.photos);

    setUserPhotos(res.data.photos)
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
  loginUser,
  getUserPhotos,
};
