function calculator() {
  let firstInput;
  let secondInput;

  let result = document.querySelector(".result-value");
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

  function math(operator){
    switch (operator){
        case "+":
            break;

        case "-":
            break;

        case "X":
            break;

        case "/":
            break;

            default:
                console.log("Operator not found")
    }
  }

  function operatorButtons() {
    // sets first input when operator is clicked.
    console.log("operator out of loop:", "FI", firstInput, "SI", secondInput);

    for (let i = 0; i < operators.length - 1; i++) {
      let operator = operators[i];
      let value = operator.textContent;

      operator.addEventListener("click", () => {
        evaluate(value)
      })
    }
  };
  operatorButtons();

  function evaluate(previousOperator) {
    const equalButton = document.querySelector(".equals");
    const value = equalButton.textContent;

        equalButton.addEventListener("click", () => {
            secondInput = parseInt(result.textContent);
            console.log("= clicked", "first input", firstInput, "previousOperator", previousOperator, "second Input", secondInput)
          switch (previousOperator) {
            case "+":
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


          console.log("operator = loop:","FI", firstInput, "SI", secondInput, "PR", previousOperator);
          // sets second input when operator is clicked.
        });
    
  }; 

}
calculator()
