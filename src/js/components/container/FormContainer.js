import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";

/*
  Main container component that carries all the logic:
  functions for handling state changes and internal component state
*/

class FormContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      value: "",
      showResult: false,
      res: 0,
      cache: {},
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getFib = this.getFib.bind(this);
    this.fibonacci = this.fibonacci.bind(this);
  }

// handle form changes
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

// Handle form submission
  handleSubmit(event) {
    this.setState({ showResult: false, error: false});
    event.preventDefault();
  }

// Set conditions to display generated fibonacci sequence
  getFib(event) {
    if (this.state.value === "" || this.state.value < 1 || this.state.value > 1476) {
      this.setState({ error: true});
    } else {
      this.setState({ showResult: true, error: false});
      var num = this.state.value;
      var fib = this.fibonacci (num);
      this.setState({ res: fib});
    }
    event.preventDefault();
  }

  // Generate fibonacci sequence through memoization
  fibonacci (num) {
      if (num <=2) return 1;
      if (num in this.state.cache) return this.state.cache[num];
      var val = this.fibonacci(num - 1) + this.fibonacci(num - 2);
      this.state.cache[num] = val;
      return val;
  }

  // Render the input form component
  renderNormal() {
    const { seo_title } = this.state;
    return (
      <div id="input-form">
          <button id="collap-btn" className="btn btn-primary" data-toggle="collapse" href="#collapseCard" role="button" aria-expanded="false" aria-controls="collapseCard">
              What does the generator do?
          </button>

          <div className="collapse" id="collapseCard">
            <div className="card card-body brown-text z-depth-5">
              <p>The tool calculates Fibonacci value for the given number, and displays a result after calculation.
              Because the Fibonacci value for over 1476 has over 300 decimals (a really big number)
              and it needs quite an impressive amount of processing, the maximum allowed value is 1476.
              Numbers after that will have infinity as a result. The range of integer
              you can input is between 1 and 1476. Try it and have fun!</p>
            </div>
          </div>

          <form className="form-control" id="article-form" onSubmit={this.getFib}>
            <Input
              text="Please input a positive integer between 1 and 1476"
              label="input_text"
              type="number"
              id="seo_title"
              value={this.state.value}
              min = "1"
              max = "1476"
              handleChange={this.handleChange}
              placeholder="Enter Number"
            />
          </form>

          <button id="fib_btn" onClick = {this.getFib} className = "waves-effect btn-large"> Fibonacci it! </button>
      </div>
    );
  }

  // Render the result component
  renderResult() {
    return (
        <div id="fib-result">
          <h2 id="result"> Your result is {this.state.res}</h2>
          <div id="result-card" className="card z-depth-1">
              <p>
                  Principle: The Fibonacci numbers F(n) are as follows:
                  F(1) = 1,   F(2) = 1,   F(3) = 2,
                  and all further values of F(n) are defined by the simple recurrence
                  F(n)  =  F(n − 1)  +  F(n − 2).
              </p>
          </div>
          <button onClick = {this.handleSubmit} className = "waves-effect waves-light btn-large"> Go Back </button>
        </div>

      );
  }

  // Render the error component
  renderError() {
    return (
      <div id="error">
          <div className="alert alert-danger" role="alert">
              <strong>Warning!</strong> Please intput a positive number &#40; 1 &#45; 1476 &#41;
          </div>
          <button onClick = {this.handleSubmit} className = "waves-effect waves-light btn-large"> Try Again </button>
      </div>
      );
  }

  // Render different components based on different conditions
  render() {
    if (this.state.error) {
      return this.renderError();
    }
    else if (this.state.showResult) {
      return this.renderResult();
    } else {
      return this.renderNormal();
    }
  }
}

export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
