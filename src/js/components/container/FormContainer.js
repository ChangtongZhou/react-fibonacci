import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
class FormContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      value: "",
      showResult: false,
      res: 0,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getFib = this.getFib.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert("You entered this number: " + this.state.value);
    this.setState({ showResult: false, error: false});
    event.preventDefault();
  }

  // Fibonacci iterative function
  getFib(event) {
    if (this.state.value === "" || this.state.value < 1 || this.state.value > 1469) {
      this.setState({ error: true});
    } else {
      this.setState({ showResult: true, error: false});
      var a = 0, b = 1, fib = 1;
      var num = this.state.value;
      for(var i = 2; i <= num; i++) {
        fib = a + b;
        a = b;
        b = fib;
      }
      // alert("Your result for " + num + " is: " + tmp);
      this.setState({ res: fib});
    }



    event.preventDefault();
  }

  renderNormal() {
    const { seo_title } = this.state;
    return (

      <div id="input-form">

          <button id="collap-btn" className="btn btn-primary" data-toggle="collapse" href="#collapseCard" role="button" aria-expanded="false" aria-controls="collapseCard">
              What does the generator do?
          </button>

          <div className="collapse" id="collapseCard">
            <div className="card card-body brown-text z-depth-5">
              The tool calculates Fibonacci value for the given number, and displays a result after calculation.
              Because the Fibonacci value for 1470 has over 300 decimals
              and it needs quite an impressive amount of processing, the maximum allowed value is 1469.
              Numbers after that will have infinity as a result. The range of number
              you can input is between 1 and 1469. Try it and have fun!
            </div>
          </div>

          <form className="form-control" id="article-form" onSubmit={this.handleSubmit}>
            <Input
              text="Please input a positive number between 1 and 1469"
              label="input_text"
              type="number"
              id="seo_title"
              value={this.state.value}
              min = "1"
              max = "1469"
              handleChange={this.handleChange}
              placeholder="Enter Number"
            />
          </form>

          <button id="fib_btn" onClick = {this.getFib} className = "waves-effect btn-large"> Fibonacci it! </button>



      </div>
    );
  }

  renderResult() {
    return (
        <div id="fib-result">
          <h3 id="result"> Your result is {this.state.res}</h3>
          <div id="result-card" className="card z-depth-1">
              <p> Principle: The Fibonacci numbers F(n) are as follows:
                  F(0) = 0,   F(1) = 1,   F(2) = 1,
                  and all further values of F(n) are defined by the simple recurrence
                  F(n)  =  F(n − 1)  +  F(n − 2).
              </p>
          </div>
          <button onClick = {this.handleSubmit} className = "waves-effect waves-light btn-large"> Go Back </button>
        </div>

      );
  }

  renderError() {
    return (


      <div id="error">
          <div className="alert alert-danger" role="alert">
              <strong>Warning!</strong> Please intput a positive number &#40; 1 &#45; 1469 &#41;
          </div>
          <button onClick = {this.handleSubmit} className = "waves-effect waves-light btn-large"> Try Again </button>
      </div>




      );
      // <div>
      //   <h5 className="pink-text text-lighten-1"> Please input a valid positive number.</h5>
      //   <button onClick = {this.handleSubmit} className = "waves-effect waves-light btn-large"> Try Again </button>
      // </div>
  }

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
