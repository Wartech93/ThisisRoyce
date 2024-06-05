import Col from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Blog() {
  return (
    <div>
      <h1 className="bg-primary bg-opacity-50">Resume</h1>
      <h2 className="bg-primary bg-opacity-50">
        Royce Atkins
      </h2>
      <p className="bg-primary bg-opacity-50">
        Bethlehem, PA
        4846565790
        royceatkins93@gmail.com
      </p>

      <h3 className="bg-primary bg-opacity-50">
        Experience
      </h3>
      <Container>
        <Row>
        <Col>
          <div className="card" style={{ width: 18 + 'rem' }}>
            <div className="card-body">
              <h4 className="card-title">
                Automotive Detailer
              </h4>
              <p className="card-text">
                Kelly Nissan | 08/2021  Present | Nazareth , PA
                I make sure that all vehicles that are cleaned are at the highest standard. All interior components are cleaned. Paint is cleaned, decontaminated and polished/paint corrected. All vehicles are
                prepared for sale. Minor scratch repair is also completed.
              </p>
            </div>
          </div>
        </Col>
        <Col>
        <div className="card" style={{ width: 18 + 'rem' }}>
          <div className="card-body">
            <h4 className="card-title">
              Automotive Technician
            </h4>
            <p className="card-text">
              Mike's Automotive and Mechanical Repair | 11/2020  08/2021 | Bath , PA
              As an automotive technician, I was required to make sure that all vehicle components were up to safety standard laws in Pennsylvania. I was also required to make sure that all vehicle emissions
              equipment was up to standard and functioning properly. I made all repairs and maintenance requested by customers. I completed full vehicle diagnostics to solve issues with check engine lights
              to small squeaks that a vehicle may have been making. I used diagnostic scanners and software to solve these issues. I am able to work on and repair all aspects of a vehicle including; brakes,
              suspension, engine, body and interior components.
            </p>
          </div>
        </div>
        </Col>
        <Col>
        <div className="card" style={{ width: 18 + 'rem' }}>
          <div className="card-body">
            <h4 className="card-title">
              Skills
            </h4>
            <p className="card-text">
              -Communication skills
              -Computer literacy
              -Leadership
              -Documentation review
              -Automotive Repair
              -Automotive Diagnostics
              -HTML
              -JavaScript
              -CSS
              -Node.js
              -JQuery
              -Bootstrap
              -Customer service
            </p>
          </div>
        </div>
        </Col>
        </Row>

        <div className="card" style={{ width: 18 + 'rem' }}>
          <div className="card-body">
            <h4>
              Education
            </h4>
            <div className="card" style={{ width: 18 + 'rem' }}>
              <div className="card-body">
                <p className="card-title">University of Central Florida</p>
                <p className="card-text">Full Stack Coding Boot Camp |  06/2024 | Orlando , FL
                  I wanted to become a knowledgeable and reliable full stack developer. I am always trying to learn new techniques and skills as the coding world is ever-changing. I want to continue and build my
                  experience as a coder as time goes on. I am open-minded to any types of training and certificates I can achieve to better my coding background. I have learned HTML, CSS and JavaScript through this
                  course. I have experience with Node.js, multiple CSS frameworks (ie Bootstrap, Materialize and Tailwind) and jquery. I am experienced using GitBash and GitHub repositories. I am willing to learn any aspects of coding.
                </p>
              </div>
            </div>
            <div className="card" style={{ width: 18 + 'rem' }}>
              <div className="card-body">
                <p className="card-title">Universal Technical Institute</p>
                <p className="card-subtitle">Auto/Diesel Technology  | 11/2013 | Exton , PA</p>
                <p className="card-text">

                  I entered school with the mindset of becoming the most knowledgeable technician that I could be. I wanted to be able to diagnose problems and fix the issue directly instead of guessing and causing
                  unnecessary costs to customers. I entered the field as an honest and open-minded technician willing to learn as much as I could.
                </p>

              </div>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}
