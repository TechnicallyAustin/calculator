function calculator() {
  let firstInput = "";
  let secondInput = "";
  let runningTotal = ""; // stores the current display as a string of numbers

  let result = document.querySelector(".result-value");
  let previousResult = document.querySelector(".previous-result");
  let previousOperator = " ";

  const numbers = document.getElementsByClassName("number");
  const modifiers = document.getElementsByClassName("mod");
  const operators = document.getElementsByClassName("operator");

  function numberButtons() {
    for (let i = 0; i < numbers.length; i++) {
      let number = numbers[i];
      let value = number.textContent;
      number.addEventListener("click", (event) => {
        // creates a string of the numbers clicked
        runningTotal += value;
        // updates the result display with the running total
        result.textContent = runningTotal;

        console.log("running total", runningTotal);
      });
    }
  }
  numberButtons();

  function modifierButtons() {
    for (let i = 0; i < modifiers.length; i++) {
      let modifier = modifiers[i];
      let value = modifier.textContent;

      modifier.addEventListener("click", () => {
        switch (value) {
          case "AC":
            previousResult.textContent = " ";
            secondInput = "";
            runningTotal = " ";
            console.log(secondInput);
            break;

          case "C":
            result.textContent = " ";
            firstInput = "";
            console.log(firstInput);
            break;

          case "%":
            console.log(value);
            break;

          case ".":
            console.log(value);
            break;

          default:
            console.log("default message");
        }
      });
    }
  }
  modifierButtons();

  function math(operator) {
    let a;
    let b;
    let total;
    switch (operator) {
      case "+":
        // sets the first input to a number
        a = parseInt(firstInput);
        // sets the second input tp a number
        b = parseInt(secondInput);
        // sets the sum to the sum of a + b
        total = a + b;

        // updates the result with the sum
        result.textContent = total;

        //sets running total to sum
        return total;

        console.log("RT", runningTotal, "FI", firstInput, "SI", secondInput);

        console.log("math function add", "sum", total);
        break;

      case "-":
        // sets the first input to a number
        a = parseInt(firstInput);
        // sets the second input tp a number
        b = parseInt(secondInput);
        // sets the sum to the sum of a + b
        total = a - b;

        // updates the result with the sum
        result.textContent = total;

        //sets running total to sum
        return total;

        console.log("RT", runningTotal, "FI", firstInput, "SI", secondInput);

        console.log("math function subtract", "sum", total);
        break;

      case "*":
        // sets the first input to a number
        a = parseInt(firstInput);
        // sets the second input tp a number
        b = parseInt(secondInput);
        // sets the sum to the sum of a + b
        total = a * b;

        // updates the result with the sum
        result.textContent = total;

        //sets running total to sum
        return total;

        console.log("RT", runningTotal, "FI", firstInput, "SI", secondInput);

        console.log("math function multiply", "total", total);
        break;

      case "/":
        // sets the first input to a number
        a = parseInt(firstInput);
        // sets the second input tp a number
        b = parseInt(secondInput);
        // sets the sum to the sum of a + b
        total = a / b;

        // updates the result with the sum
        result.textContent = total;

        //sets running total to sum
        return total;

        console.log("RT", runningTotal, "FI", firstInput, "SI", secondInput);

        console.log("math function divide", "total", total);
        break;

      default:
        console.log("Operator not found");
    }
  }

  function operatorButtons() {
    // sets first input when operator is clicked.

    for (let i = 0; i < operators.length - 1; i++) {
      let operator = operators[i];
      let value = operator.textContent;

      operator.addEventListener("click", () => {
        if (result.textContent !== " ") {
          firstInput = runningTotal;
          console.log("FI", firstInput);
        }
        //set first input to running total

        // sets running total to an empty string
        runningTotal = " ";

        // sets the previous operator
        previousOperator = value;

        // set the previous display to the firstInput + previousOperator
        previousResult.textContent = `${firstInput + " "} ${previousOperator}`;

        // clear the result
        result.textContent = " ";

        //console.log("operator value:",value, "FI", firstInput, "SI", secondInput);
      });
    }
  }
  operatorButtons();

  function evaluate(previousOperator) {
    addEqualEvents()
   
  }; evaluate()

  function addEqualEvents() {
     const equalButton = document.querySelector(".equals");
     const value = equalButton.textContent;

    equalButton.addEventListener("click", () => {
      secondInput = runningTotal;
      switch (previousOperator) {
        case "+":
          runningTotal = math(previousOperator);

          previousResult.textContent = `${firstInput + " "} ${
            previousOperator + " "
          } ${secondInput + " "} ${value + " "} ${runningTotal} `;
          break;

        case "-":
             runningTotal = math(previousOperator);

             previousResult.textContent = `${firstInput + " "} ${
               previousOperator + " "
             } ${secondInput + " "} ${value + " "} ${runningTotal} `;
            
          break;

        case "*":
             runningTotal = math(previousOperator);

             previousResult.textContent = `${firstInput + " "} ${
               previousOperator + " "
             } ${secondInput + " "} ${value + " "} ${runningTotal} `;
          break;

        case "/":
             runningTotal = math(previousOperator);

             previousResult.textContent = `${firstInput + " "} ${
               previousOperator + " "
             } ${secondInput + " "} ${value + " "} ${runningTotal} `;
          break;

        default:
          console.log("evaluate default message", previousOperator);
      }

      console.log(
        "operator = loop:",
        "FI",
        firstInput,
        "SI",
        secondInput,
        "PR",
        previousOperator,
        "result",
        runningTotal
      );
      // sets second input when operator is clicked.
    });
  }
}
calculator();
