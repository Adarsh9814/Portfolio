import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Todolist from "../../Assets/Projects/Todolist.png";
import KFC_Clone from "../../Assets/Projects/KFC_Clone.png";

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
              imgPath={KFC_Clone}
              isBlog={false}
              title="KFC_Clone"
              description="Built a food  delivery app, Developed a responsive UI, dynamic updates, error handling, and validations."
              ghLink="https://github.com/Adarsh9814/KFC_Clone"
              demoLink="https://kfc14.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todolist}
              isBlog={false}
              title="Todolist"
              description=" Built an TO DO APP ,Developed an intuitive UI with API integration and managed version control on GitHub."
              ghLink="https://github.com/Adarsh9814/Todo-list-using-javascript-/tree/main"
              demoLink="https://todolist1409.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
