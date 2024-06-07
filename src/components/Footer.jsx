
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
    return (  
      <div>
      
      <Navbar fixed="bottom" expand="lg" bg="primary" className="text-center" >      
          <Navbar.Brand
          href="/Home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />          
            <Nav >
              <p >©Soft Industry 2024</p>
              
              
           
            </Nav>
          
        
      </Navbar>
      </div>
      );
    }
    
    


