import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';

export default class Header extends Component {

  render() {

    return (
      <nav>
        <div className="nav-wrapper white">
          <a href="#" className="brand-logo offset-md-1 brown-text">Generate Fibonacci</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a className="grey-text text-darken" href="sass.html">Calculate</a></li>
            <li><a className="grey-text text-darken" href="badges.html">Formula</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

const wrapper = document.getElementById("header");
wrapper ? ReactDOM.render(<Header />, wrapper) : false;
