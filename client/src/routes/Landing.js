import { useEffect, useState } from 'react';
import { Button, Col, Container, Figure, Row } from 'react-bootstrap';

import { NavBar } from './../components/Navs';

import './../assets/styles/universalStyles.css';
import { getUserPhotos } from '../helpers/requests';
import { useSelector } from 'react-redux';

export default function LandingPage() {
  const isAuthenticated = useSelector(
    (store) => store.authStore.userData.isAuthenticated
  );
  const [photos, setPhotos] = useState([]);

  const unAuthdUploader = '';

  useEffect(() => {
    getUserPhotos(unAuthdUploader, setPhotos);
  }, []);

  return (
    <div className="">
      <NavBar />
      <main className="text-white mt-5 pt-5">
        <Container>
          <Row>
            <Col className="py-3">
              <div className="d-flex justify-content-between px-4 pt-2">
                <p className="text-center h3 text-platinum">Photos</p>
                <div>
                  <Button variant="outline-primary" href="/upload">
                    Upload Photo
                  </Button>
                  {isAuthenticated ? (
                    <>
                      <span className="px-2">|</span>
                      <Button variant="outline-secondary" href="/dashboard">
                        Go to Dashboard
                      </Button>
                    </>
                  ) : null}
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-evenly flex-wrap pt-3">
                {photos.length > 0 ? (
                  photos.map((photo, index) => {
                    return (
                      <>
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
                            <p className="h6 text-white">{photo.Description}</p>
                          </Figure.Caption>
                        </Figure>
                      </>
                    );
                  })
                ) : (
                  <p className="alert alert-warning py-4" role="alert">
                    There are no images in the database. Upload a Photo to view.
                  </p>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
