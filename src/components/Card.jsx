
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'animate.css/animate.min.css'

export default function Project(props) {
    return (
<Card className='me-3 animate__animated animate__zoomInLeft' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                  <Card.Title>{props.title}</Card.Title>
                  <Card.Text>
                   {props.description}
                  </Card.Text>
                  <a href={props.link} target="_blank">
                    <Button variant="primary">Visit</Button></a>
                </Card.Body>
              </Card>)
};