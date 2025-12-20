import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiBootstrap,
} from "react-icons/di";
import {
  SiDotnet,
  SiMicrosoftsqlserver,
  SiAngular,
  SiMicrosoftsharepoint,
  SiAndroidstudio,
} from "react-icons/si";

import { SiMysql, SiExpress } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsharepoint />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
    </Row>
  );
}

export default Techstack;
