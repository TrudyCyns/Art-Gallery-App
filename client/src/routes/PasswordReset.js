import React from 'react';
import { Container } from 'react-bootstrap';

import { LogoNavbar } from '../components/Navs';
import { PasswordResetForm } from '../components/Forms';

function PasswordResetPage(props) {
  return (
    <div className="">
      <LogoNavbar />
      <main className="p-5">
        <Container className="p-3 bg-light rounded">
          <PasswordResetForm />
        </Container>
      </main>
    </div>
  );
}

export default PasswordResetPage;
