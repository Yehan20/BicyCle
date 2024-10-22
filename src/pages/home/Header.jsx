
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
   
      {['md'].map((expand) => (
        <Navbar variant='dark' key={expand} expand={expand} className="position-absolute  mb-3 z-2">
          <Container fluid>
            <Navbar.Brand className='text-white' href="#">Bicycle</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="bg-black"
            >
              <Offcanvas.Header  closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Navbar.Brand className='text-white' href="#">Bicycle</Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 gap-4 pe-3 ">
                  <NavLink className='nav-link text-white' to={'/'} >Home</NavLink>
                  <NavLink className='nav-link text-white' to={'/product'} >Product</NavLink>
                  <NavLink className='nav-link text-white' to={'/contact'} >Contact Us</NavLink>

                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header