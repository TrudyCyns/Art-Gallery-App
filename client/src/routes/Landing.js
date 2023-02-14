import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

import { NavBar } from "./../components/Navs";

import "./../assets/styles/universalStyles.css";

export default function LandingPage() {
  return (
    <div className="bg-black">
      <NavBar />
      <main className="text-white mt-5 pt-5">
        <Container>
          <Row className="p-1">
            <Col>
              <Button onClick={() => alert('Upload image here')}>Upload Image</Button>
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
