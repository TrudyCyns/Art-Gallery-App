import { Col, Container, Row, Figure, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { DashNavbar, LogoNavbar } from './../components/Navs';

import './../assets/styles/universalStyles.css';

import { getUserPhotos } from './../helpers/requests';

export default function DashboardPage() {
  const [photos, setPhotos] = useState([]);
  const [userPhotos, setUserPhotos] = useState([]);

  const userDetails = useSelector((store) => store.authStore.userData);
  const isAuthenticated = userDetails.isAuthenticated;

  const unAuthdUploader = '';

  useEffect(() => {
    getUserPhotos(unAuthdUploader, setPhotos);
  }, []);

  useEffect(() => {
    getUserPhotos(userDetails.Email, setUserPhotos);
  }, [userDetails]);

  return (
    <div className="bg-black">
      {isAuthenticated && (
        <>
          <DashNavbar />
          <main className="text-white pt-5">
            <Container>
              <p className="h4 text-orange">Welcome {userDetails.firstName}</p>
              <Row>
                <div className="d-flex justify-content-between px-4 pt-2">
                  <p className="text-center h3 text-platinum">My Photos</p>
                  <div>
                    <Button variant='outline-primary' href='/upload'>
                      Upload Photo
                    </Button>
                  </div>
                </div>
                <Col className="py-3">
                  <div className="d-flex align-items-center justify-content-evenly flex-wrap">
                    {userPhotos.length > 0 ? (
                      userPhotos.map((photo, index) => {
                        return (
                          <Figure key={index}>
                            <Figure.Image
                              width={200}
                              src={photo.photoUrl}
                              className="p-1"
                              alt="This image was deleted."
                              height={200}
                            ></Figure.Image>
                            <Figure.Caption className="p-1">
                              <p className="h4 text-platinum">{photo.Title}</p>
                              <p className="h6 text-white">
                                {photo.Description}
                              </p>
                            </Figure.Caption>
                          </Figure>
                        );
                      })
                    ) : (
                      <p className="alert alert-warning" role="alert">
                        You have no photos in the database. Upload a Photo to
                        view.
                      </p>
                    )}
                  </div>
                </Col>
              </Row>
              <Row>
                <p className="text-center h3 text-platinum">Other Photos</p>
                <Col className="py-3">
                  <div className="d-flex align-items-center justify-content-evenly flex-wrap">
                    {photos.length > 0 ? (
                      photos.map((photo, index) => {
                        return (
                          <Figure key={index}>
                            <Figure.Image
                              width={200}
                              src={photo.photoUrl}
                              className="p-1"
                              alt="This image was deleted."
                              height={200}
                            ></Figure.Image>
                            <Figure.Caption className="p-1">
                              <p className="h4 text-platinum">{photo.Title}</p>
                              <p className="h6 text-white">
                                {photo.Description}
                              </p>
                            </Figure.Caption>
                          </Figure>
                        );
                      })
                    ) : (
                      <p className="alert alert-warning" role="alert">
                        There are no photos in the database. Upload a Photo to
                        view.
                      </p>
                    )}
                  </div>
                </Col>
              </Row>
            </Container>
          </main>
        </>
      )}
      {!isAuthenticated && (
        <>
          <LogoNavbar />
          <main className="text-white pt-5">
            <Container className="text-center">
              <div className="alert alert-warning">
                <p>You can not access this page without logging in.</p>
                <a className='alert-link' href="/login">Go to Login</a>
              </div>
            </Container>
          </main>
        </>
      )}
    </div>
  );
}
