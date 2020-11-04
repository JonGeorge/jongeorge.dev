import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import ProjectCard from "./ProjectCard";

import placeholder from "./placeholder.json";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: placeholder.projects,
    };
  }

  componentDidMount() {
    // this.setState({ projects: projects });
    // queryAllProjects().then((res) => console.log(res.projects));
  }

  render() {
    const projects = this.state.projects;
    return (
      <Container fluid>
        <Row>
          {projects.map((project, i) => {
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
