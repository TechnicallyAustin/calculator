function createCalculator() {
  const calculator = document.body.appendChild(document.createElement("div"));
  calculator.setAttribute("class", "calculator");

  function DisplayBox() {
    const displayContainer = calculator.appendChild(document.createElement("div"));
    displayContainer.setAttribute("class", "display-container");

    const display = displayContainer.appendChild(document.createElement("div"));
    display.setAttribute("class", "display");
  }
  DisplayBox();

  function buttons() {
    const buttonContainer = calculator.appendChild(document.createElement("div"));
    buttonContainer.setAttribute("class", "button-container");

    function buttonLayout() {
        const numberContainer = buttonContainer.appendChild(document.createElement("div"));
        numberContainer.setAttribute("class", "number-container")


        const numberButtons = numberContainer.appendChild(document.createElement("div"));
        numberButtons.setAttribute("class", "number-buttons")
        

        function clearButton() {
           const clear = numberButtons.appendChild(document.createElement("div"));
           clear.setAttribute("class", "aux clear button");
           const symbol = clear.appendChild(document.createElement("h3"));
           symbol.textContent = "AC";
         }
         clearButton();

         function negativeButton() {
            const negative = numberButtons.appendChild(document.createElement("div"));
            negative.setAttribute("class", "aux negative button");
            const symbol = negative.appendChild(document.createElement("h3"));
            symbol.textContent = "+/-";
          }; negativeButton();

          function percentageButton() {
            const percent = numberButtons.appendChild(document.createElement("div"));
            percent.setAttribute("class", "aux percent button")
            const symbol = percent.appendChild(document.createElement("h3"))
            symbol.textContent = "%"
          }; percentageButton()


      function oneButton() {
        const one = numberButtons.appendChild(document.createElement("div"));
        one.setAttribute("class", "number one button");
        const number = one.appendChild(document.createElement("h3"));
        number.textContent = "1";
      }
      oneButton();

      function twoButton() {
        const two = numberButtons.appendChild(document.createElement("div"));
        two.setAttribute("class", "number two button");
        const number = two.appendChild(document.createElement("h3"));
        number.textContent = "2";
      }
      twoButton();

      function threeButton() {
        const three = numberButtons.appendChild(
          document.createElement("div")
        );
        three.setAttribute("class", "number three button");
        const number = three.appendChild(document.createElement("h3"));
        number.textContent = "3";
      }
      threeButton();

      function fourButton() {
        const four = numberButtons.appendChild(document.createElement("div"));
        four.setAttribute("class", "number four button");
        const number = four.appendChild(document.createElement("h3"));
        number.textContent = "4";
      }
      fourButton();

      function fiveButton() {
        const five = numberButtons.appendChild(document.createElement("div"));
        five.setAttribute("class", "number five button");
        const number = five.appendChild(document.createElement("h3"));
        number.textContent = "5";
      }
      fiveButton();

      function sixButton() {
        const six = numberButtons.appendChild(document.createElement("div"));
        six.setAttribute("class", "number six button");
        const number = six.appendChild(document.createElement("h3"));
        number.textContent = "6";
      }
      sixButton();

      function sevenButton() {
        const seven = numberButtons.appendChild(
          document.createElement("div")
        );
        seven.setAttribute("class", "number seven button");
        const number = seven.appendChild(document.createElement("h3"));
        number.textContent = "7";
      }
      sevenButton();

      function eightButton() {
        const eight = numberButtons.appendChild(
          document.createElement("div")
        );
        eight.setAttribute("class", "number eight button");
        const number = eight.appendChild(document.createElement("h3"));
        number.textContent = "8";
      }
      eightButton();

      function nineButton() {
        const nine = numberButtons.appendChild(document.createElement("div"));
        nine.setAttribute("class", "number nine button");
        const number = nine.appendChild(document.createElement("h3"));
        number.textContent = "9";
      }
      nineButton();

      function zeroButton() {
        const zero = numberButtons.appendChild(document.createElement("div"));
        zero.setAttribute("class", "number zero button");
        const number = zero.appendChild(document.createElement("h3"));
        number.textContent = "0";
      }
      zeroButton();

      function decimalButton() {
        const decimal = numberButtons.appendChild(document.createElement("div"));
        decimal.setAttribute("class", "decimial button")
        const symbol = decimal.appendChild(document.createElement("h3"));
        symbol.textContent = "."
      }; decimalButton()
      
    }; buttonLayout();

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
