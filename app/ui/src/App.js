import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Projects />
        <Resume />
      </div>
    );
  }
}

export default App;
