import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tajnarine Ganpat </span>
            from <span className="purple"> Minnesota, U.S.</span>
            <br />I am a senior Blockchain and Full Stack Developer.
            <br />
            <br />           
            University of Minnesota   
            <br />
           
            <span className="purple">Master Degree</span> of Science and Engineering with <span className="purple">GPA 3.9</span>.
            <br />
            <br />      
            Apart from coding, some other activities that I love to do!
          </p>
          
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Computer Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Football and Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
