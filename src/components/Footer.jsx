
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
    return (  
      <div>
      
      <Navbar fixed="bottom" expand="lg" style={{backgroundColor:"#0a630a"}} className="text-center mt-5" >      
          <Navbar.Brand
          href="/Home"></Navbar.Brand>         
            <Nav >
              <p >©Soft Industry 2024</p>   
            </Nav>
      </Navbar>
      </div>
      );
    }
    
    


