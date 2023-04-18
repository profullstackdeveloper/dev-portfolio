import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import polkacity from "../../Assets/Projects/polkacity.png";
import peakdefi from "../../Assets/Projects/peakdefi.png";
import massage from "../../Assets/Projects/massage.png";
import jiffy from "../../Assets/Projects/jiffy.png";
import slotokinga from "../../Assets/Projects/slotokinga.png";

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
              imgPath={polkacity}
              isBlog={false}
              title="Polkacity"
              description="NFT marketplace for Metaverse Game" 
              demoLink="https://polkacity.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={peakdefi}
              isBlog={false}
              title="PEAKDEFI"
              description="Decentralized Finance platform"
              demoLink="https://bsc.peakdefi.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={massage}
              isBlog={false}
              title="MyMassagePillow"
              description="Top Selling Massage Pillows Shop"
              demoLink="http://dapp.finversechain.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jiffy}
              isBlog={false}
              title="Jiffy"
              description="On-demand Home Maintenance and Repair Services"
              demoLink="https://jiffyondemand.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slotokinga}
              isBlog={false}
              title="Slotokinga"
              description="Unity Slot Game"
              demoLink="https://play.google.com/store/apps/details?id=com.slotokinga&hl=en_US&gl=US&pli=1"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
