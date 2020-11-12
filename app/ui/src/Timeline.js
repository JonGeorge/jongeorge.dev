import React, { Component } from "react";

class Timeline extends Component {
  render() {

    return (
      <div className="timeline">
        {this.props.entries.map(entry => {
          const classes = this.props.current === entry.index ? "entry active" : "entry";

          if (this.props.current === entry.index) {
            return (
              <div className={classes} key={entry.index}>
                <div className="date">{entry.text}</div>
              </div>
            );
          }

          return (
            <div className={classes} onClick={() => this.props.onClick(entry.index)} key={entry.index}>
              <div className="date hide">{entry.text}</div>
            </div>
          );
        })}
       </div>);
  }
}

export default Timeline;
