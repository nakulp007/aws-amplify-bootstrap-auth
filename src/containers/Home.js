import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Scratch</h1>
          <p>A simple auth app. Created using AWS Amplify and SemanticUI.</p>
        </div>
      </div>
    );
  }
}