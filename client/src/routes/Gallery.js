import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { DashNavbar, LogoNavbar } from './../components/Navs';

import './../assets/styles/universalStyles.css';
import { getUserPhotos } from './../helpers/requests';
import FigureComponent from '../components/Img';

export default function GalleryPage() {
  const [userPhotos, setUserPhotos] = useState([]);

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
                  <Button variant="outline-primary" href="/upload">
                    Upload Photo
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="py-3">
                  <div className="d-flex align-items-center justify-content-evenly flex-wrap">
                    <FigureComponent photos={userPhotos} />
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
