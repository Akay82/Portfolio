import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ajay Kumar </span>
            from <span className="purple"> Ludhiana, India.</span>
            <br />
            I am a Fresher.
            <br />
            I have completed BCA from PCTE Group of Institutes
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime's and Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket 
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn Current Affairs
            </li>
          </ul>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
