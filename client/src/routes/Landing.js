import { useEffect, useState } from 'react';
import { Button, Col, Container, Figure, Image, Row } from 'react-bootstrap';

import { NavBar } from './../components/Navs';

import './../assets/styles/universalStyles.css';
import { PhotoUploadModal } from '../components/Modal';
import { getPhotos } from '../helpers/requests';

export default function LandingPage() {
  const [modalShow, setModalShow] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos(setPhotos);
  }, []);

  console.log('Photos: ', photos);

  return (
    <div className="bg-black vh-100 h-100">
      <NavBar />
      <main className="text-white mt-5 pt-5">
        <Container>
          <Row className="p-1">
            <Col>
              <Button onClick={() => setModalShow(true)}>Upload Photo</Button>
              <PhotoUploadModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
          <Row>
            <Col className="py-3">
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
                          <Figure.Caption className='p-1'>
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
