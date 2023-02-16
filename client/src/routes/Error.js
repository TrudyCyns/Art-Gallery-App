/* eslint-disable no-restricted-globals */
import { Button, Container, Image } from 'react-bootstrap';
import { MdArrowBack } from 'react-icons/md';
import { IconContext } from 'react-icons';

import { LogoNavbar } from './../components/Navs';

import './../assets/styles/universalStyles.css';
import ErrorIcon from './../assets/images/404.svg';

export default function ErrorPage() {
  return (
    <div className="bg-black  ">
      <LogoNavbar />
      <main className="text-white pt-5">
        <Container>
          <div className="m-auto w-50 text-center">
            <Image src={ErrorIcon} className="py-5" />
            <h2 className="p-2">Page Not Found</h2>
            <p className="p-3">
              The page you are looking for doesn't exist. Either it was removed
              or the link is mistypes. Here is a link to go back.
            </p>
            <Button className="rounded-pill" onClick={() => history.back()}>
              <IconContext.Provider value={{ className: 'react-icons' }}>
                <MdArrowBack />
              </IconContext.Provider>{' '}
              Go Back
            </Button>
          </div>
        </Container>
      </main>
    </div>
  );
}
