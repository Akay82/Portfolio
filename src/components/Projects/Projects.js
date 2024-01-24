import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import drawing from "../../Assets/Projects/drawing.png";
import text from "../../Assets/Projects/Text.png"
import shop from "../../Assets/Projects/shop.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drawing}
              isBlog={false}
              title="Drawing"
              description="In this drawing app, users can draw different shapes like rectangles, circles, and triangles in their preferred colors. They can also erase or download their drawing as an image. All these functionalities are done with HTML 5 canvas & vanilla JavaScript, no external framework or library is used."
              ghLink="https://github.com/Akay82/Drawing"
              demoLink="https://ajaykdrawing.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="E-commerce Website"
              description="It is a Electronic E-commerce site in which we can choose the products and we can add the products in our cart, this app is made with ReactJS. In this we can select the products and in the cart section we can edit our cart products as we want and there is contact us page is as well.."
              ghLink="https://github.com/Akay82/E-Commerce-Shop"
              demoLink="https://ajayk-e-commerce.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="In this web application you have to enter your city and it will give you the weather details of that city i used rest API in this Application and in this projects i used HTML5, Css and JavaScript. It gives the Real Time data which is visible at our display . It is Easy and simple to use."
              ghLink="https://github.com/Akay82/weather"
              demoLink="https://weather-hzws.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text}
              isBlog={false}
              title="Text-Editor-App"
              description=" This is a Simple Text Editor Which is made with the help of React, In this application we can write the content and we can bold the text, we can change the color of text, alignment and list items."
              ghLink="https://github.com/Akay82/Simple-Text-Editor"
              demoLink="https://text-editor2.netlify.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
