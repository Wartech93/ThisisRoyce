import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Blog() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        These are the projects I have worked on myself or collaborated on.
      </p>
      <Container>
     <Row>
       <Col xs={6} md={4}>
         <Image src="public\background.JPG" rounded />
       </Col>
       <Col xs={6} md={4}>
         <Image src="holder.js/171x180" roundedCircle />
       </Col>
       <Col xs={6} md={4}>
         <Image src="holder.js/171x180" thumbnail />
       </Col>
     </Row>
   </Container>

    </div>
     
  );
}
