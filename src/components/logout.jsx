import React, { Component } from "react";

export default class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("token");

    window.location = "/";
  }

  render() {
    return null;
  }
}
