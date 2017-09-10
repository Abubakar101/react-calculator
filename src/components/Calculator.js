import React, { Component } from "react";
import "../App.css";
import Display from "./Display";
import NumberPad from "./NumberPad";

class Calculator extends Component {
  // this component may need to have some state
  // think about what you need to keep track of
  // where would you need to pass information to?

  // making a constructor
  constructor(prop) {
    super(prop);

    // ** creating display value
    this.state = {
      showValue: ""
    };

    // binding it - so it doesn't render before calling the function
    this.showButton = this.showButton.bind(this);
  }

  // Function that console.logs and saves the values into display
  showButton(x) {
    console.log(x);
    // equaling.....
    if (x == "=") {
        // spliting the chars to change the "X" to "*" for multiplication
      let newValue = this.state.showValue.split("");
      for (let i = 0; i < newValue.length; i++) {
        if (newValue[i] == "x") {
          newValue[i] = "*";
        }
        // to fix "Octal literals are not allowed in strict mode" when using eval() in react.....0 wasn't working..
          // Has to be number 0
          // char before number 0 isn't ".", null or undefined, a number
        if (
          newValue[i] === "0" && newValue[i-1] !== '.' &&
          (!newValue[i - 1] || isNaN(newValue[i - 1]))
        ) {
          newValue[i] = "";
        }
      }
        // joining them, so use eval() :)
      newValue = eval(newValue.join(""));
        // setting new State after "=" clicked
      this.setState({
        showValue: newValue
      });
      return;
    }
      // Clearing after "C" is pressed by reseting the State with "" string
    if (x == "C") {
      this.setState({
        showValue: ""
      });
      return;
    }
    // ** setting display value
    this.setState({
      showValue: this.state.showValue + x
    });
  }
  // rendering and passing functions or connecting functions....
  render() {
    return (
      <div className="calculator">
        <Display num={this.state.showValue} />
        <NumberPad showButton={this.showButton} />
      </div>
    );
  }
}

export default Calculator;
