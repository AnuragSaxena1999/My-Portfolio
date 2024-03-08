import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { TbBrandRedux } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiCss3Full,
  DiCssTricks,
  DiLinux,
  DiBootstrap
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-aos-delay='500'>
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-aos-delay='1000'>
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-aos-delay='1500'>
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-aos-delay='2000'>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-aos-delay='2500'>
        <DiBootstrap />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-aos-delay='3000'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-aos-delay='3500'>
        <TbBrandRedux/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-aos-delay='4000'>
        <SiMysql />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-aos-delay='4500'>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-aos-delay='5000'>
        <FaGithub/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-aos-delay='5500'>
        <DiLinux />
      </Col>
      
     
    </Row>
  );
}

export default Techstack;
