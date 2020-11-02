import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import placeholder from "./placeholder.json";

class About extends Component {
  render() {
    return (
      <Container className="full-height">
        <Row className="center">
          <Col xs="12" className="ft-size-14 pad">
            {placeholder.about}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
