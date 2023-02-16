import React from 'react';

import { Figure } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function FigureComponent(props) {
  const isAuthenticated = useSelector(
    (store) => store.authStore.userData.isAuthenticated
  );
  const { photos } = props;
  return (
    <>
      {photos.length > 0 ? (
        photos.map((photo, index) => {
          return (
            <div className='w-25 text-center p-2'>
              <Figure key={index}>
                <Figure.Image
                  // width={200}
                  src={photo.photoUrl}
                  alt="This image was deleted."
                ></Figure.Image>
                <Figure.Caption className="p-1">
                  <p className="h4 text-platinum">{photo.Title}</p>
                  <p className="h6 text-white">{photo.Description}</p>
                </Figure.Caption>
              </Figure>
            </div>
          );
        })
      ) : (
        <p className="alert alert-warning py-4" role="alert">
          There are no images in the database. Upload a Photo to view.
        </p>
      )}
    </>
  );
}

export default FigureComponent;
