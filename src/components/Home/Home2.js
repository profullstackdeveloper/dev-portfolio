import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Introduce
              {/* <span className="purple"> Introduce </span> Myself */}
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> JavaScript, TypeScript, Solidity, Python, Unity and Go. </b>
              </i>
              <br />
              <br />
                I have a strong track record of delivering high-quality software solutions.<br />
                I excel at designing, developing, and implementing complex applications using <br />
              a range of programming languages and frameworks.<br />
                With a proven ability to deliver scalable, reliable, and performant solutions,<br />
                I am confident that I can contribute to the success of any project.<br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/profullstackdeveloper"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tajnarine-ganpat-51205a259/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
