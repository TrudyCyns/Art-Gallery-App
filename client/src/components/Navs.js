import { Container, Nav, Navbar, Button, Image } from 'react-bootstrap';

import './../assets/styles/Nav.css';
import './../assets/styles/universalStyles.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserData } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const isAuthenticated = useSelector(
    (store) => store.authStore.userData.isAuthenticated
  );

  return (
    <header className="border-bottom">
      <Navbar variant="dark" expand="lg" fixed="top" className="bg-black">
        <Container>
          <Navbar.Brand href="/">ArtGallery</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item className="ms-3 text-platinum">Welcome!</Nav.Item>
            </Nav>
            <Nav className="d-flex align-items-center d-flex flex-row">
              <Nav.Item className="mx-2">
                <Button
                  href={isAuthenticated ? '/dashboard' : '/login'}
                  className="rounded"
                >
                  Login / Sign Up
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

function DashNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header className="border-bottom">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="bg-black"
      >
        <Container>
          <Navbar.Brand href="/">ArtGallery</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/myphotos">My Photos</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center d-flex flex-row">
              <Nav.Item className="mx-2">
                <Button
                  variant="outline-primary"
                  className="rounded"
                  onClick={() => {
                    dispatch(clearUserData());
                    navigate('/');
                  }}
                >
                  Logout
                </Button>
              </Nav.Item>
              <Nav.Item className="mx-2">
                <Image
                  src="https://picsum.photos/32"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

function LogoNavbar() {
  return (
    <header className="border-bottom">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="bg-black"
      >
        <Container>
          <Navbar.Brand href="/" className="ps-5">
            ArtGallery
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

export { NavBar, LogoNavbar, DashNavbar };
