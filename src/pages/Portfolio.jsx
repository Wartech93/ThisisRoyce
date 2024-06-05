import Col from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'animate.css/animate.min.css'


export default function Blog() {
  return (
    <div>
      <h1 className="bg-primary bg-opacity-50">Portfolio</h1>
      <p className="bg-primary bg-opacity-50  text-center w-50 m-5">
        These are the projects I have worked on myself or collaborated on.
      </p>
      <Container>
        <Row>
            <Col >
              <Card className='animate__animated animate__zoomInLeft' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="src\mainPage.png" />
                <Card.Body>
                  <Card.Title>Summit Luxury Experiences</Card.Title>
                  <Card.Text>
                   A project for a mock luxury car rental business.
                  </Card.Text>
                  <a href='https://four04-project-2.onrender.com' target="_blank">
                    <Button variant="primary">Visit</Button></a>
                </Card.Body>
              </Card>
            </Col>
          <Col >
          <Card className='animate__animated animate__zoomInLeft' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="src\DnDicon.png" />
                <Card.Body>
                  <Card.Title>D&D Spell List</Card.Title>
                  <Card.Text>
                   A tool for D&D players using a spellcasting class.
                  </Card.Text>
                  <a href='https://four04-project-2.onrender.com' target="_blank">
                    <Button variant="primary">Visit</Button></a>
                </Card.Body>
              </Card>
            <Image className="animate__animated animate__zoomInRight m5"
              src="src\DnDicon.png" />
          </Col>
          <Col >
            <Image className="animate__animated animate__zoomInUp"
              src="src\Employeecalc.png" />
          </Col>
        </Row>
      </Container>
    </div>

  );
}


