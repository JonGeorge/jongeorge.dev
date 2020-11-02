import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import ProjectCard from "./ProjectCard";

import placeholder from "./placeholder.json";

class Projects extends Component {
  render() {
    const projects = placeholder.projects;
    return (
      <Container fluid>
        <Row>
          {projects.map((project) => {
            return (
              <Col xs="12" xl="4">
                <ProjectCard
                  title={project.title}
                  clients={project.clients}
                  contributions={project.contributions}
                  description={project.description}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Projects;
