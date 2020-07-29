import React, { Component } from "react";
import "./App.css";

import Accordion from "./components/Accordion";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion heading="ACMCT HaiSon">Best Yasuo</Accordion>
      </div>
    );
  }
}

export default App;
