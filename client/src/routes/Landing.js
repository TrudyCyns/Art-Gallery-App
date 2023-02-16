import { useEffect, useState } from 'react';
import { Button, Col, Container, Figure, Row } from 'react-bootstrap';

import { NavBar } from './../components/Navs';

import './../assets/styles/universalStyles.css';
import { getUserPhotos } from '../helpers/requests';

export default function LandingPage() {
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
                    <Button variant='outline-primary' href='/upload'>
                      Upload Photo
                    </Button>
                  </div>
                </div>
              <div className="d-flex align-items-center justify-content-evenly flex-wrap">
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
                  <p className="alert alert-warning" role="alert">
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
