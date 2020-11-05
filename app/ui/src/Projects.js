import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import ProjectCard from "./ProjectCard";

import placeholder from "./placeholder.json";

class Projects extends Component {
  constructor() {
    super();
    this.state = { isLoading: false, projects: [] };
  }

  componentDidMount() {
    fetch("/api/v1/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ projects: data });
      })
      .catch(console.log);
  }

  render() {
    const projects = this.state.projects;
    return (
      //   <div>
      //     <p>{this.state.isLoading ? "LOADING ..." : ""}</p>
      //     {projects.map((project) => (
      //       <p>{project.title}</p>
      //     ))}
      //   </div>

      <Container fluid>
        <Row>
          {projects.map((project, i) => {
            return (
              <Col xs="12" xl="4">
                <ProjectCard
                  title={project.title}
                  clientCompany={project.clientCompany}
                  clientDepartment={project.clientDepartment}
                  contributions={project.contribution}
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
