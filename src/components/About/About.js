import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import EducationCard from "./Education/EducationCard";
import Experience from "./Experience/Experience";
// import Education from "./Education/Education";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 data-aos="fade-right" data-aos-delay='100' style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            data-aos="fade-left" data-aos-delay='100'
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img" 
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
          
        <h1 className="project-heading" >
        Work  <strong className="purple">Experience</strong> 
        </h1>
        <Row>
          <Col>
          <Experience/>
          </Col>
        </Row>
        <h1 className="project-heading" style={{marginTop:"45px"}}>
        Education<strong className="purple"> Details</strong> 
        </h1>
            <Row>
              <Col>
                <EducationCard/>
              </Col>
            </Row> 
            
                  
      </Container>
    </Container>
  );
}

export default About;
