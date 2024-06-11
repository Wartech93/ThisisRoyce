import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

export default function About() {
  return (
    <div>
      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <Row className="w-100">
          <Col className="d-flex justify-content-center align-items-center">
            <Image 
              src="/aboutmephoto.jpg" 
              roundedCircle 
              style={{ height: '20rem', width: '20rem' }}
            />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Card style={{ height: '20rem', width: '25rem' }}>
              <Card.Body className="d-flex flex-column justify-content-center">
                <Card.Title className="text-center">Hi There!</Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">My name's Royce</Card.Subtitle>
                <Card.Text className="text-center">
                  I am an aspiring web developer trying to increase my coding knowledge and skills. I thoroughly enjoy working with people and creating tools and services to help those without the understanding of how it works.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}