import { Container, Nav, Navbar, Button } from "react-bootstrap";

import "./../assets/styles/Nav.css";
import "./../assets/styles/universalStyles.css";

function NavBar() {
  return (
    <header>
      <Navbar variant="dark" expand="lg" fixed="top" className="bg-black">
        <Container>
          <Navbar.Brand href="/">ArtGallery</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex align-items-center mx-auto">
              <Nav.Item>
                <Button
                  href="/login"
                  className="rounded-pill"
                >
                  Login
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

// function DashNavbar() {
//   return (
//     <header className="border-bottom">
//       <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
//         <Container>
//           <Navbar.Brand href="/" className="">
//             ArtGallery
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav ">
//             <Nav className="me-auto">
//               <Nav.Link href="/dashboard">Home</Nav.Link>
//               <Nav.Link href="/dashboard">My Businesses</Nav.Link>
//             </Nav>
//             <Nav className="d-flex align-items-center d-flex flex-row">
//               <Nav.Link href="#notifications" className="mx-2">
//                 <Icon name={Notification} />
//               </Nav.Link>
//               <Nav.Link href="#help" className="mx-2">
//                 <Icon name={Help} />
//               </Nav.Link>
//               <Nav.Link href="#settings" className="mx-2">
//                 <Icon name={Settings} />
//               </Nav.Link>
//               <Nav.Item className="mx-2">
//                 <Image
//                   src="https://picsum.photos/32"
//                   alt="mdo"
//                   width="32"
//                   height="32"
//                   className="rounded-circle"
//                 />
//               </Nav.Item>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// }

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

export { NavBar, LogoNavbar };
