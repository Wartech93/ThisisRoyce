import Col from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'animate.css/animate.min.css'
import Project from '../components/Project'

export default function Blog() {
  return (
    <div>
      <h1 className="bg-primary bg-opacity-50">Portfolio</h1>
      <p className="bg-primary bg-opacity-50  text-center w-50 m-5">
        These are the projects I have worked on myself or collaborated on.
      </p>
      
        
             <Project />
           
          {/* <Col >
          <Card className='animate__animated animate__zoomInLeft' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="src\DnDicon.png" />
                <Card.Body>
                  <Card.Title>D&D Spell List</Card.Title>
                  <Card.Text>
                   A tool for D&D players using a spellcasting class.
                  </Card.Text>
                  <a href='https://wartech93.github.io/404_Project/' target="_blank">
                    <Button variant="primary">Visit</Button></a>
                </Card.Body>
              </Card>            
          </Col>
          <Col >
          <Card className='animate__animated animate__zoomInLeft' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="src\Employeecalc.png" />
                <Card.Body>
                  <Card.Title>Employee Payroll</Card.Title>
                  <Card.Text>
                   A tool for businesses to keep track of Employees and their payrolls.
                  </Card.Text>
                  <a href='https://github.com/Wartech93/Royce_Employee_Payroll' target="_blank">
                    <Button variant="primary">Visit</Button></a>
                </Card.Body>
              </Card>
          </Col> */}
 
    </div>

  );
}


