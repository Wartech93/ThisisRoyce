
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
    return (  
      <div>
      
      <Navbar fixed="bottom" expand="lg" bg="primary" >      
          <Navbar.Brand
          href="/Home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />          
            <Nav className="ms-auto">
              <p>Royce Atkins, web developer.</p>
              
              
           
            </Nav>
          
        
      </Navbar>
      </div>
      );
    }
    
    


