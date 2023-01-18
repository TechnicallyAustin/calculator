function calculator() {
  let firstInput;
  let secondInput;
  let runningTotal = 0;

  const result = document.querySelector(".result-value");
  let previousResult = document.querySelector(".previous-result");
  let previousOperator = " "

  const numbers = document.getElementsByClassName("number");
  const modifiers = document.getElementsByClassName("mod");
  const operators = document.getElementsByClassName("operator");

  function numberButtons() {
    for (let i = 0; i < numbers.length; i++) {
      let number = numbers[i];
      let value = number.textContent;
      number.addEventListener("click", () => {
        result.textContent += value;
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
            secondInput = 0;
            console.log(secondInput);
            break;

          case "C":
            result.textContent = " ";
            firstInput = 0;
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

  function add(firstNumber, secondNumber) {
  }

  function subtract(firstNumber, secondNumber) {}

  function divide(firstNumber, secondNumber) {}

  function equals(firstNumber, secondNumber) {}

  function operatorButtons() {
    // sets first input when operator is clicked.
    console.log("operator out of loop:", "FI", firstInput, "SI", secondInput);
    for (let i = 0; i < operators.length - 1; i++) {
      let operator = operators[i];
      let value = operator.textContent;

      operator.addEventListener("click", () => {
        firstInput = parseInt(result.textContent)
        previousOperator = value
        result.textContent = " "
        previousResult.textContent = `${firstInput + " "} ${value}`

        runningTotal = evaluate(previousOperator, firstInput)

      })
    }
  };
  operatorButtons();

  function evaluate(previousOperator, num1) {
    const equalButton = document.querySelector(".equals");
    const value = equalButton.textContent;
    console.log("PO",previousOperator, num1)
        equalButton.addEventListener("click", () => {
          secondInput = parseInt(result.textContent);
          switch (previousOperator) {
            case "+":
                add(num1, secondInput)
                console.log(value)
            break;

            case "-":
                console.log(value)
              break;

            case "X":
                console.log(value);
              break;

            case "/":
                console.log(value);
              break;

            default:
              console.log("evaluate default message", previousOperator);
          }; 


          console.log("operator = loop:", "FI", num1, "SI", secondInput, "PR", previousOperator);
          // sets second input when operator is clicked.
        });
    
  }; 

}
calculator()
