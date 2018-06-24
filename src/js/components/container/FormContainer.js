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
    if (this.state.value === "" ) {
      // this.setState({ showResult: false, error: "Please input a positive number."});
      // alert("Please input a positive number.")
      this.setState({ error: true});
    } else {
      this.setState({ showResult: true, error: false});
      var a = 0, b = 1, tmp = 1;
      // var num = Number(this.state.value);
      var num = this.state.value;
      for(var i = 2; i <= num; i++) {
        tmp = a + b;
        a = b;
        b = tmp;
      }

      // alert("Your result for " + num + " is: " + tmp);
      this.setState({ res: tmp});
    }



    event.preventDefault();
  }



  renderNormal() {
    const { seo_title } = this.state;
    return (
      <div>
          <form className="card" id="article-form" onSubmit={this.handleSubmit}>
            <Input
              text="Please input a positive number"
              label="seo_title"
              type="number"
              id="seo_title"
              value={this.state.value}
              handleChange={this.handleChange}
            />
          </form>

          <button onClick = {this.getFib} className = "waves-effect waves-brown btn-large"> Fibonacci it! </button>
      </div>
    );
  }

  renderResult() {
    return (
        <div>
          <h3> Your result is {this.state.res}</h3>
          <button onClick = {this.handleSubmit} className = "waves-effect waves-light btn-large"> Go Back </button>
        </div>
      );
  }

  renderError() {
    return (
        <div>
          <h5 className="pink-text text-lighten-1"> Please input a valid positive number.</h5>
          <button onClick = {this.handleSubmit} className = "waves-effect waves-light btn-large"> Try Again </button>
        </div>
      );
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
