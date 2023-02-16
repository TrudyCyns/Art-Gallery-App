import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Col, Container, Row, Figure } from 'react-bootstrap';

import { DashNavbar, LogoNavbar } from './../components/Navs';
import { PhotoUploadModal } from '../components/Modal';

import './../assets/styles/universalStyles.css';
import { getUserPhotos } from './../helpers/requests';

export default function GalleryPage() {
  const [userPhotos, setUserPhotos] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const userDetails = useSelector((store) => store.authStore.userData);
  const isAuthenticated = userDetails.isAuthenticated;

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
              <Row className="p-1">
                <Col>
                  <Button onClick={() => setModalShow(true)}>
                    Upload Photo
                  </Button>
                  <PhotoUploadModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </Col>
              </Row>
              <Row>
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
                <a className="alert-link" href="/login">
                  Go to Login
                </a>
              </div>
            </Container>
          </main>
        </>
      )}
    </div>
  );
}
