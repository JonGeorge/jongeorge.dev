import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";

class ProjectCard extends Component {
  render() {
    return (
      <Card className="panel">
        <CardTitle>Authorization to Operate as a Service</CardTitle>
        <CardBody>
          <div className="section">
            <span className="sub-heading">Client</span>
            <span className="content">National Cancer Institute</span>
            <span className="content">
              Center for Biomedical Informatics and Information Technology
            </span>
          </div>
          <div className="section">
            <span className="sub-heading">Contributions</span>
            <span className="content">Data design and architecture</span>
            <span className="content">Front-end development</span>
          </div>
          <div className="section">
            <span className="sub-heading">Project</span>
            <span className="content">
              Workflow ecosystem I have zero cycles for this. Pre launch high
              touch client nor optics or drink the Kool-aid, but drill down.
            </span>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default ProjectCard;
