import React, { Component } from "react";
import loading from "./Spinner-1s-200px.gif";

export default class Loader extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          className="img"
          style={{ mixBlendMode: "multiply", width: "5rem" }}
          src={loading}
          alt="loading"
        />
      </div>
    );
  }
}
