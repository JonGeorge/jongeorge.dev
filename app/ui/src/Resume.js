import React, { Component } from "react";
import Timeline from "./Timeline";

import placeholder from "./placeholder.json";

class Resume extends Component {
constructor() {
  super();
  this.state = {
    currentEntry: 3
  };
}

handleClick = (currentEntry) => {
  this.setState({currentEntry});

}

  render() {
    const entries = placeholder.timelineEntries;

    return (
      <div>
      
          <Timeline entries={entries} current={this.state.currentEntry} onClick={this.handleClick}/>

      </div>);
  }
}

export default Resume;
