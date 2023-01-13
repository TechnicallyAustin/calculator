function createCalculator() {
  const calculator = document.body.appendChild(document.createElement("div"));
  calculator.setAttribute("class", "calculator");

  function DisplayBox() {
    const displayContainer = calculator.appendChild(
      document.createElement("div")
    );
    displayContainer.setAttribute("class", "display-container");

    const display = displayContainer.appendChild(document.createElement("div"));
    display.setAttribute("class", "display");
  }
  DisplayBox();

  function buttons() {
    const buttonContainer = calculator.appendChild(document.createElement("div"));
    buttonContainer.setAttribute("class", "button-container");

    function numbers() {
        const numberContainer = buttonContainer.appendChild(document.createElement("div"));
        numberContainer.setAttribute("class", "number-container")

      function zeroButton() {
        const zero = numberContainer.appendChild(document.createElement("div"));
        zero.setAttribute("class", "number zero button");
        const number = zero.appendChild(document.createElement("h3"));
        number.textContent = "0";
      }
      zeroButton();

      function oneButton() {
        const one = numberContainer.appendChild(document.createElement("div"));
        one.setAttribute("class", "number one button");
        const number = one.appendChild(document.createElement("h3"));
        number.textContent = "1";
      }
      oneButton();

      function twoButton() {
        const two = numberContainer.appendChild(document.createElement("div"));
        two.setAttribute("class", "number two button");
        const number = two.appendChild(document.createElement("h3"));
        number.textContent = "2";
      }
      twoButton();

      function threeButton() {
        const three = numberContainer.appendChild(
          document.createElement("div")
        );
        three.setAttribute("class", "number three button");
        const number = three.appendChild(document.createElement("h3"));
        number.textContent = "3";
      }
      threeButton();

      function fourButton() {
        const four = numberContainer.appendChild(document.createElement("div"));
        four.setAttribute("class", "number four button");
        const number = four.appendChild(document.createElement("h3"));
        number.textContent = "4";
      }
      fourButton();

      function fiveButton() {
        const five = numberContainer.appendChild(document.createElement("div"));
        five.setAttribute("class", "number five button");
        const number = five.appendChild(document.createElement("h3"));
        number.textContent = "5";
      }
      fiveButton();

      function sixButton() {
        const six = numberContainer.appendChild(document.createElement("div"));
        six.setAttribute("class", "number six button");
        const number = six.appendChild(document.createElement("h3"));
        number.textContent = "6";
      }
      sixButton();

      function sevenButton() {
        const seven = numberContainer.appendChild(
          document.createElement("div")
        );
        seven.setAttribute("class", "number seven button");
        const number = seven.appendChild(document.createElement("h3"));
        number.textContent = "7";
      }
      sevenButton();

      function eightButton() {
        const eight = numberContainer.appendChild(
          document.createElement("div")
        );
        eight.setAttribute("class", "number eight button");
        const number = eight.appendChild(document.createElement("h3"));
        number.textContent = "8";
      }
      eightButton();

      function nineButton() {
        const nine = numberContainer.appendChild(document.createElement("div"));
        nine.setAttribute("class", "number nine button");
        const number = nine.appendChild(document.createElement("h3"));
        number.textContent = "9";
      }
      nineButton();
    }
    numbers();

    function operators() {
        const operatorContainer = buttonContainer.appendChild(document.createElement("div"));
        operatorContainer.setAttribute("class", "operator-container");

      function addButton() {
        const add = operatorContainer.appendChild(document.createElement("div"));
        add.setAttribute("class", "operator add button");
        const operator = add.appendChild(document.createElement("h3"));
        operator.textContent = "+";
      }
      addButton();

      function subtractButton() {
        const subtract = operatorContainer.appendChild(
          document.createElement("div")
        );
        subtract.setAttribute("class", "operator subtract button");
        const operator = subtract.appendChild(document.createElement("h3"));
        operator.textContent = "-";
      }
      subtractButton();

      function multiplyButton() {
        const multiply = operatorContainer.appendChild(
          document.createElement("div")
        );
        multiply.setAttribute("class", "operator multiply button");
        const operator = multiply.appendChild(document.createElement("h3"));
        operator.textContent = "X";
      }
      multiplyButton();

      function divideButton() {
        const divide = operatorContainer.appendChild(
          document.createElement("div")
        );
        divide.setAttribute("class", "operator divide button");
        const operator = divide.appendChild(document.createElement("h3"));
        operator.textContent = "/";
      }
      divideButton();

      function exponentButton() {
        const exponent = operatorContainer.appendChild(
          document.createElement("div")
        );
        exponent.setAttribute("class", "operator exponent button");
        const operator = exponent.appendChild(document.createElement("h3"));
        operator.textContent = "x ^ 2";
      }
      exponentButton();

      function squareRootButton() {
        const squareRoot = operatorContainer.appendChild(document.createElement("div"));
        squareRoot.setAttribute("class", "operator squareRoot button");
        const operator = squareRoot.appendChild(document.createElement("h3"));
        operator.textContent = "Sqr";
      }
      squareRootButton();

      function equalsButton() {
        const equals = operatorContainer.appendChild(document.createElement("div"));
        equals.setAttribute("class", "operator equals button");
        const operator = equals.appendChild(document.createElement("h3"));
        operator.textContent = "=";
      }
      equalsButton();
    }
    operators();
  }
  buttons();
}
createCalculator();
