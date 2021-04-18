import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
