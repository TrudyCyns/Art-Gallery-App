import React from 'react';
import { LogoNavbar } from '../components/Navs';
import { Container } from 'react-bootstrap';
import { PhotoUploadForm } from '../components/Forms';

function UploadPage(props) {
  return (
    <div className="">
      <LogoNavbar />
      <main className="p-5">
        <Container className="p-5 bg-light rounded">
          <p className="h3 text-center text-oxford-blue">Upload a Photo</p>
          <PhotoUploadForm />
        </Container>
      </main>
    </div>
  );
}

export default UploadPage;
