import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import suryajewellery from "../../Assets/Projects/suryajewellery.jpg";
import hometuition from "../../Assets/Projects/hometuition.jpg";
import movix from "../../Assets/Projects/movix.jpg";
import biing from "../../Assets/Projects/biing.jpg";
import offcampus from "../../Assets/Projects/offcampus.jpg"
import QuizApp from "../../Assets/Projects/QuizApp.jpg"
import WeatherApp from "../../Assets/Projects/Weather-App.jpg"
import Password from "../../Assets/Projects/Pswdgenrtr.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" data-aos="fade-up" data-aos-delay='100'>
            <ProjectCard
              imgPath={movix}
              isBlog={false}
              title="Movix"
              description="Web based application in which Users can easily search for movies and obtain relevant information such as title, release year, genre, and a brief description with dyanamic and responsive user interface . The integration of a movie database or API allows real-time data retrieval, ensuring that users have access to up-to-date information about their favorite movies."
              ghLink="https://github.com/AnuragSaxena1999/Movix"
              demoLink="https://movie-app-anurag.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card" data-aos="fade-up" data-aos-delay='400'>
            <ProjectCard
              imgPath={hometuition}
              isBlog={false}
              title="HomeTuitionWaला "
              description= "web-based application built with ReactJS offers a streamlined platform for connecting with students seeking home tuition. Technologies used in the project Reactjs ,  Ant design , react-countup , react-scrolll-trigger , react-type-animation , sweetalert2 , react-slick."
              ghLink="https://github.com/AnuragSaxena1999/HometuitionWala"
              demoLink="https://hometuitionwala.in/"
            />
          </Col>

          <Col md={4} className="project-card" data-aos="fade-up" data-aos-delay='700'>
            <ProjectCard
              imgPath={suryajewellery}
              isBlog={false}
              title="SuryaJewelleries"
              description="An Ecommerce website for surya jewellers which is based on pure reactjs with complete responsiveness. Technologies used in this project Reactjs , ReactBootstrap , Ant design , Visual studio code (code editor)"
              ghLink="https://github.com/AnuragSaxena1999/Surya-Jewellery"
              demoLink="https://suryajewellery.in/"              
            />
          </Col>

          <Col md={4} className="project-card" data-aos="fade-up" >
            <ProjectCard
              imgPath={biing}
              isBlog={false}
              title="Billing-ERA"
              description="Web-based application that generate the invoice for a 
              company and manages its entire inventory. Technologies Used in this project are HTML, CSS, JavaScript, PHP, MySQL, JSP."
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card" data-aos="fade-up" data-aos-delay='400'>
            <ProjectCard
              imgPath={offcampus}
              isBlog={false}
              title="OffcampusNikalenge"
              description="A ReactJS project provides a seamless platform for users to stay updated with daily job postings. Leveraging modern web technologies, users can access a user-friendly interface to browse through a curated list of job opportunities."
              ghLink="https://github.com/AnuragSaxena1999/OffcampusNikalenge"
              demoLink="https://offcampusnikalenge.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card" data-aos="fade-up" data-aos-delay='700'>
            <ProjectCard
              imgPath={QuizApp}
              isBlog={false}
              title="Quiz App"
              description="Developed a captivating quiz application using HTML, CSS, and JavaScript, showcasing strong front-end development skills and JavaScript concepts."
              ghLink="https://github.com/AnuragSaxena1999/Quiz-App"
              demoLink="https://quiz-app-anurag.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card" data-aos="fade-up" >
            <ProjectCard
              imgPath={WeatherApp}
              isBlog={false}
              title="Weather-App"
              description="Weather App provides real-time weather updates with a clean and intuitive interface. Built using HTML, CSS, and JavaScript, it seamlessly integrates with a weather API to deliver accurate forecasts. With responsive design, it offers a smooth experience across devices."
              ghLink="https://github.com/AnuragSaxena1999/Weather-App"
              demoLink="https://weather-app-anurag.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card" data-aos="fade-up" data-aos-delay='400' >
            <ProjectCard
              imgPath={Password}
              isBlog={false}
              title="Password-Generator"
              description="Password generator project, developed with React.js and its powerful hooks. This application generates secure passwords tailored to user preferences, such as length and character types. With the flexibility of React hooks, it ensures efficient state management and dynamic user interactions."
              ghLink="https://github.com/AnuragSaxena1999/Password-Generator"
              demoLink="https://password-generator-anurag.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
