import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFill
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank, FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} data-aos="fade-right" className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java ,C/C++, Javascript and Problem Solving.</b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Software Testing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">React.js</b> 
              
              
            </p>
          </Col>
          <Col md={4} data-aos="fade-left" className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-down">FIND ME ON</h1>
            <p data-aos="fade-down">
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons" data-aos="fade-up" data-aos-delay='500'>
                <a
                  href="https://github.com/AnuragSaxena1999?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
               
              </li>
              <li className="social-icons" data-aos="fade-up" data-aos-delay='1000'>
                <a
                  href="https://leetcode.com/AnuragSaxena/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons" data-aos="fade-up" data-aos-delay='1500'>
                <a
                  href="https://www.hackerrank.com/profile/anurag1705094"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons "
                >
                  <FaHackerrank/>
                </a>
                
              </li>
              
             
              <li className="social-icons" data-aos="fade-up" data-aos-delay='2000'>
                <a
                  href="https://www.linkedin.com/in/anurag-saxena-7257001b1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons" data-aos="fade-up" data-aos-delay='2500'>
                <a
                  href="https://www.instagram.com/saxenaanurag133?utm_source=qr&igsh=bTh1N2Rlbm1xdmd3 "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
