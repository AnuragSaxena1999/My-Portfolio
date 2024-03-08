import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p data-aos="fade-right" data-aos-delay='100' style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anurag Saxena </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            I am currently employed as a <span className="purple">React Developer</span> at Logyify.
            <br />
            I have completed <span className="purple">MCA</span> at BVICAM , New Delhi.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity" data-aos="fade-right" data-aos-delay='700'>
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity" data-aos="fade-right" data-aos-delay='900'>
              <ImPointRight /> Teaching
            </li>
            <li className="about-activity" data-aos="fade-right" data-aos-delay='1100'>
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
