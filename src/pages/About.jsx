import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

export default function About() {
  return (
    <div>
      
      <Container className="mt-5">
      <Row>
        <Col xs={4} md={4}>
          <Image src="/aboutmephoto.jpg" roundedCircle style={{ height: '20 rem', width: '25rem' }}/>
        </Col>
        <Col>
        <Card style={{ height: '20rem', width: '25rem' }}>
      <Card.Body>
        <Card.Title>Hi There!</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">My name's Royce</Card.Subtitle>
        <Card.Text>
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
