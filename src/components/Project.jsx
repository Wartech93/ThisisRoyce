import Card from './Card';
import Col from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



const summit = {
    title: 'Summit Luxury Experiences',
    description: 'A project for a mock luxury car rental business.',
    image: 'public/mainPage.png',
    link: 'https://four04-project-2.onrender.com',
    id: 1,
};

const dAndD = {
    title: 'D&D Spell List',
    description: 'A tool for D&D players using a spellcasting class to track spells.',
    image: 'public/DnDicon.png',
    link: 'https://wartech93.github.io/404_Project/',
    id: 2,
}
const employee = {
    title: 'Employee Salary Tracker',
    description: 'A tool for businesses to keep track of Employees and their payrolls.',
    image:'public/Employeecalc.png',
    link: 'https://wartech93.github.io/404_Project/',
    id: 3,
}
const readMe = {
    title: 'ReadMe Generator',
    description: 'A tool for businesses to keep track of Employees and their payrolls.',
    image:'public/ReadMe_Generator.png',
    link: 'https://github.com/Wartech93/Readme_Generator',
    id: 4,
}


export default function Project() {
    return (
        <div>
            <Container className="mb-5 d-flex align-items-md-center">
                <Row >
                    <Col className="justify-content-center">
                    <Card title={summit.title} description={summit.description} image={summit.image} link={summit.link} id={summit.id} />
                    <Card title={dAndD.title} description={dAndD.description} image={dAndD.image} link={dAndD.link} id={dAndD.id} />
                    <Card title={employee.title} description={employee.description} image={employee.image} link={employee.link} id={employee.id} />
                    </Col>
                    <Col className="justify-content-center ">
                    <Card title={readMe.title} description={readMe.description} image={readMe.image} link={readMe.link} id={readMe.id} />
                    <Card title={dAndD.title} description={dAndD.description} image={dAndD.image} link={dAndD.link} id={dAndD.id} />
                    <Card title={employee.title} description={employee.description} image={employee.image} link={employee.link} id={employee.id}/>
                    </Col> 
                </Row>
            </Container>
        </div>
    );
} 