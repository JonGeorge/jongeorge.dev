import React, { Component } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = this.props.title;
    const clients = this.props.clients;
    const contributions = this.props.contributions;
    const description = this.props.description;

    return (
      <Card className="panel">
        <CardTitle>{title}</CardTitle>

        <CardBody>
          <div className="card-section">
            <span className="sub-heading">Client</span>
            {clients.map((client) => {
              return <span className="content">{client}</span>;
            })}
          </div>

          <div className="card-section">
            <span className="sub-heading">Contributions</span>
            {contributions.map((contribution) => {
              return <span className="content">{contribution}</span>;
            })}
          </div>

          <div className="card-section">
            <span className="sub-heading">Project</span>
            <span className="content">{description}</span>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default ProjectCard;
