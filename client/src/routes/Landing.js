import { useEffect, useState } from 'react';
import { Button, Col, Container, Figure, Row } from 'react-bootstrap';

import { NavBar } from './../components/Navs';

import './../assets/styles/universalStyles.css';
import { getUserPhotos } from '../helpers/requests';
import { useSelector } from 'react-redux';
import FigureComponent from '../components/Img';

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
                <FigureComponent photos={photos} />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
