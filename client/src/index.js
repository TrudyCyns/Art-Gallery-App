import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { store } from './store';

import LandingPage from './routes/Landing';
import LoginPage from './routes/Login';
import DashboardPage from './routes/Dashboard';
import GalleryPage from './routes/Gallery';
import ErrorPage from './routes/Error';
import UploadPage from './routes/Upload';

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/upload', element: <UploadPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/dashboard', element: <DashboardPage /> },
  { path: '/myphotos', element: <GalleryPage /> },
  { path: '*', element: <ErrorPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
