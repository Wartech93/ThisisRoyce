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
      <p className="bg-primary bg-opacity-50 text-center object-cover w-100 object-bottom mt-3">
        These are the projects I have worked on myself or collaborated on.
      </p>
       
             <Project />
 
    </div>

  );
}


