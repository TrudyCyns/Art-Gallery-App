import { Col, Container, Image, Row, Figure, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { DashNavbar } from './../components/Navs';
import { PhotoUploadModal } from '../components/Modal';

import './../assets/styles/universalStyles.css';

import { getPhotos } from '../helpers/requests';

export default function DashboardPage() {
  const [photos, setPhotos] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const userDetails = useSelector((store) => store.authStore.userData);

  useEffect(() => {
    getPhotos(setPhotos);
  }, []);

  return (
    <div className="bg-black">
      <DashNavbar />
      <main className="text-white pt-5">
        <Container>
          <p className="h4 text-orange">Welcome {userDetails.firstName}</p>
          <Row>
            <div className='d-flex justify-content-between px-4 pt-2'>
              <p className="text-center h3 text-platinum">My Photos</p>
              <div>
                <Button onClick={() => setModalShow(true)}>Upload Photo</Button>
                <PhotoUploadModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
            <Col className="py-3">
              <div className="d-flex align-items-center justify-content-evenly flex-wrap">
                <Image src="https://picsum.photos/200" className="p-2" />
                <Image src="https://picsum.photos/200" className="p-2" />
                <Image src="https://picsum.photos/200" className="p-2" />
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
                    There are no photos in the database. Upload a Photo to view.
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
