import React, { Component } from "react";
import ReactDOM from "react-dom";



class Formula extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}




export default Formula;

const wrapper = document.getElementById("formula");
wrapper ? ReactDOM.render(<Formula />, wrapper) : false;
