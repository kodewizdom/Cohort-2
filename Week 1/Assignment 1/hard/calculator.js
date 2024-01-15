/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.ans = 0;
  }

  add(number) {
    this.ans += number;
  }

  subtract(number) {
    this.ans -= number;
  }

  multiply(number) {
    this.ans *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.ans /= number;
  }

  clear() {
    this.ans = 0;
  }

  getResult() {
    return this.ans;
  }

  calculate(expression) {
    this.clear();
    expression = expression.replace(/\s/g, ''); // Remove spaces 

    try {
      let ans = eval(expression);
      if (isNaN(ans) || !isFinite(ans)) {
        throw new Error("Invalid input: Unable to evaluate the expression");
      }

      return (this.ans = ans);
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = Calculator;

