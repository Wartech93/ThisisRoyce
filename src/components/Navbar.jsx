
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'animate.css/animate.min.css';
import { useState, useEffect} from 'react';
function Navbars() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    // Trigger the animation when the component mounts
    setAnimate(true);
  }, []);
  const currentPage = useLocation().pathname;
  return (
  <Container>
    <Navbar  fixed="top" expand="lg" style={{backgroundColor:"#0a630a"}} >      
        <Navbar.Brand className=
        {animate && currentPage === '/Home' ? 'animate__animated animate__fadeIn' : ''} 
        href="/Home">Royce Atkins</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/Home"
              className={currentPage === '/Home' ? 'nav-link active' : 'nav-link'}>Home</Nav.Link>
            <Nav.Link href="/About"
              className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>About</Nav.Link>
            <Nav.Link href="/Contact"
              className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>
            <Nav.Link href="/Portfolio"
              className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Nav.Link>
            <Nav.Link href="/Resume"
              className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>      
    </Navbar>
    </Container>
  );
}

export default Navbars;