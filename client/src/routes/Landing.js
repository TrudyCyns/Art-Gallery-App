import { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

import { NavBar } from "./../components/Navs";

import "./../assets/styles/universalStyles.css";
import { PhotoUploadModal } from "../components/Modal";

export default function LandingPage() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="bg-black vh-100 h-100">
      <NavBar />
      <main className="text-white mt-5 pt-5">
        <Container>
          <Row className="p-1">
            <Col>
              <Button onClick={() => setModalShow(true)}>Upload Image</Button>
              <PhotoUploadModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
          <Row>
            <Col className="py-3">
              <div className="d-flex align-items-center justify-content-evenly flex-wrap">
                <Image src="https://picsum.photos/200" className="p-2" />
                <Image src="https://picsum.photos/200" className="p-2" />
                <Image src="https://picsum.photos/200" className="p-2" />
                <Image src="https://picsum.photos/200" className="p-2" />
                <Image src="https://picsum.photos/200" className="p-2" />
                <Image src="https://picsum.photos/200" className="p-2" />
                <Image src="https://picsum.photos/200" className="p-2" />
                <Image src="https://picsum.photos/200" className="p-2" />
                <Image src="https://picsum.photos/200" className="p-2" />
                <Image src="https://picsum.photos/200" className="p-2" />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
