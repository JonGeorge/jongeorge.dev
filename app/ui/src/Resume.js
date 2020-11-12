import React, { Component } from "react";
import {Container, Row, Col} from "reactstrap";
import Timeline from "./Timeline";

import placeholder from "./placeholder.json";

class Resume extends Component {
constructor() {
  super();
  this.state = {
    currentEntry: 4
  };
}

handleClick = (currentEntry) => {
  this.setState({currentEntry});
}

  render() {
    const entries = placeholder.timelineEntries;

    return (
        <Container fluid="true">
          <Row className="submenu">
            <Col xs="12">
                <span className="submenu-item">EXPERIENCE</span>
                <span className="submenu-item">SKILLS</span>
                <span className="submenu-item">EDUCATION</span>
            </Col>
          </Row>
          <Row className="time">
            <Col xs="12">
                <Timeline 
                entries={entries} 
                current={this.state.currentEntry} 
                onClick={this.handleClick}
                />
            </Col>
          </Row>
          <Row>
            <Col md="4">
                <div className="left-nav-item">Software Engineer</div>
                <div className="left-nav-item">Developer</div>
                <div className="left-nav-item">Executive IT Support</div>
                <div className="left-nav-item">IT Technician</div>
            </Col>

            <Col md="4" className="content-pane">
                <div className="sub-heading">Employer</div>
                <div className="content">
                Howard County Government
                </div>

                <div className="sub-heading">Background</div>
                <div className="content">
                I was brought on during the inception of a project to change the way citizens interacted with local government. Because of my aptitude, existing relationship with the primary stakeholders, and insight into the problem we were solving, the department’s leadership thought I would be ideal to spear-head the development of what is now known as Constituent Services Management.
                </div>

                <div className="sub-heading">Duties</div>
                <div className="content">
                    Identified inefficiencies and pitfalls in processes
<br/><br/>
                    Architect and develop applications to solve complex business problems
                    <br/><br/>
                    Implement and manage ServiceNow’s CSM
                    <br/><br/>
                    Migrate legacy applications to ServiceNow
                    <br/><br/>
                    Coordinate and conduct training for the County Executive, County Council, and County Auditor offices
                </div>
            </Col>

            <Col md="4">
            
            </Col>
          </Row>
        </Container>
      );
  }
}

export default Resume;
