import Col from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Blog() {
  return (
    <div>
      <Container>
      <h1 className=" text-center bg-primary m-5 bg-opacity-50 object-cover w-100 object-bottom">Resume</h1>

      <p className="bg-primary text-center bg-opacity-50 m-5 object-cover w-100 object-bottom fs-3" >
       <li className="m-3">Bethlehem, PA</li> 
       <li className="m-3">4846565790</li>
       <li className="m-3"> royceatkins93@gmail.com</li>
      </p>
      <div className="">
        <h3 className="bg-primary m-5 bg-opacity-50 w-50 text-center object-cover w-100 object-bottom ">
          Experience
        </h3>
      </div>
      </Container>
      <Container>
        <Row className="m-5">
          <Col>
          <div className="">
            <div className="card text-center m-5 overflow-auto object-cover w-100 object-bottom" >
              <div className="card-body">
                <h4 className="card-title">
                  Automotive Detailer
                </h4>
                <p className="card-text">
                  Kelly Nissan | 08/2021  Present | Nazareth , PA</p>
                <p className="fs-5">
                  I make sure that all vehicles that are cleaned are at the highest standard. All interior components are cleaned. Paint is cleaned, decontaminated and polished/paint corrected. All vehicles are
                  prepared for sale. Minor scratch repair is also completed.
                </p>
              </div>
            </div>
          </div>
          </Col>
          <Col>
          
            <div className="card text-center ms-5 overflow-auto object-cover w-100 object-bottom" >
              <div className="card-body">
                <h4 className="card-title">
                  Automotive Technician
                </h4>
                <p className="card-text">
                  Mike's Automotive and Mechanical Repair | 11/2020  08/2021 | Bath , PA
                </p>
                <p className="fs-5">
                  As an automotive technician, I was required to make sure that all vehicle components were up to safety standard laws in Pennsylvania. I was also required to make sure that all vehicle emissions
                  equipment was up to standard and functioning properly. I made all repairs and maintenance requested by customers. I completed full vehicle diagnostics to solve issues with check engine lights
                  to small squeaks that a vehicle may have been making. I used diagnostic scanners and software to solve these issues. I am able to work on and repair all aspects of a vehicle including; brakes,
                  suspension, engine, body and interior components.
                </p>
              </div>
            </div>
          
          </Col>
        </Row>
        </Container>
        <Container>
        <Row>
          <Col>
          <div className="">
            <h4 className="bg-primary bg-opacity-50 m-5 text-center object-cover w-100 object-bottom">
              Skills
            </h4>            
           
              <div className="card text-center bg-opacity-50 m-5 object-cover w-100 object-bottom" >
                <div className="card-body">
                  <p className="card-text">
                    <li>Communication skills</li>
                    <li>Computer literacy</li>
                    <li>Leadership</li>
                    <li>Documentation review</li>
                    <li>Automotive Repair</li>
                    <li> Diagnostics</li>Automotive
                    <li>HTML</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>Node.js</li>
                    <li>JQuery</li>
                    <li>Bootstrap</li>
                    <li>Customer Service</li>
                  </p>
                </div>
              </div>
            </div>
         
          </Col>
        </Row>
        </Container>
        <Container>
        <Row>
          <Col>
          
           <div>
              <h4 className="bg-primary text-center bg-opacity-50 m-5 object-cover w-100 object-bottom">
                Education
              </h4> 
              
            <div className="card-body">
              <div className="card text-center m-5 overflow-auto object-cover w-100 object-bottom" >
                <div className="card-body">
                  <h4 className="card-title">University of Central Florida</h4>
                  <p className="card-text">Full Stack Coding Boot Camp |  06/2024 | Orlando , FL
                    I wanted to become a knowledgeable and reliable full stack developer. I am always trying to learn new techniques and skills as the coding world is ever-changing. I want to continue and build my
                    experience as a coder as time goes on. I am open-minded to any types of training and certificates I can achieve to better my coding background. I have learned HTML, CSS and JavaScript through this
                    course. I have experience with Node.js, multiple CSS frameworks (ie Bootstrap, Materialize and Tailwind) and jquery. I am experienced using GitBash and GitHub repositories. I am willing to learn any aspects of coding.
                  </p>
                </div>
              </div>
              <div className="card text-center m-5 object-cover w-100 object-bottom" >
                <div className="card-body">
                  <h4 className="card-title">Universal Technical Institute</h4>
                  <p className="card-subtitle">Auto/Diesel Technology  | 11/2013 | Exton , PA</p>
                  <p className="card-text">
                    I entered school with the mindset of becoming the most knowledgeable technician that I could be. I wanted to be able to diagnose problems and fix the issue directly instead of guessing and causing
                    unnecessary costs to customers. I entered the field as an honest and open-minded technician willing to learn as much as I could.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
