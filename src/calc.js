function calculator() {
     let firstInput 
     let secondInput 
     const result = document.querySelector(".result-value")
     let previousResult = document.querySelector(".previous-result")

     const numbers = document.getElementsByClassName("number")
     const modifiers = document.getElementsByClassName("mod")
     const operators = document.getElementsByClassName("operator")
    
    function numberButtons() {
        for (let i = 0; i < numbers.length; i++){
            let number = numbers[i]
            let value = number.textContent
            number.addEventListener("click", () => {
                result.textContent += value
            })
        }
    }; numberButtons()

    function modifierButtons() {
     for (let i = 0; i < modifiers.length; i++){
        let modifier = modifiers[i]
        let value = modifier.textContent
        modifier.addEventListener("click", () => {
            switch(value) {
                case "AC":
                    previousResult = " "
                    break;

                case "C":
                    result.textContent = " "
                    break;

                case "%":
                    console.log(value);
                    break;

                case ".":
                    console.log(value);
                    break;

                default:
                    console.log("default message")
                
            }
        })
     }
    }; modifierButtons()



    function add(firstNumber, secondNumber) {
        let num1 = parseInt(firstNumber)
        let num2 = parseFloat(secondNumber)
        let total = num1 + num2
        result.textContent = total

    }; 

    function subtract(firstNumber, secondNumber) {}

    function divide(firstNumber, secondNumber) {}

    function equals(firstNumber, secondNumber) {}

    function updateDisplay() {}

    function operatorButtons() {
        // sets first input when operator is clicked.
        console.log("operator out of loop:", "FI", firstInput, "SI", secondInput)
         for (let i = 0; i < operators.length; i++){
            let operator = operators[i]
            let value = operator.textContent
            operator.addEventListener("click", () => {
                switch (value) {
                  case "+":
                    // sets first input when operator is clicked.
                    firstInput = result.textContent
                    result.textContent = " "
                    console.log(value);
                    console.log("case +", "FI", firstInput)
                    evaluate(value)
                    break;

                  case "-":
                    // sets first input when operator is clicked.
                    console.log(value);
                    break;

                  case "X":
                    // sets first input when operator is clicked.
                    console.log(value);
                    break;

                  case "/":
                    // sets first input when operator is clicked.
                    console.log(value);
                    break;

                  default:
                    console.log("Operator default message");
                }
            })
         }
    }; operatorButtons()

    function evaluate(operator) {
        const equalButton = document.querySelector(".equals")
        equalButton.addEventListener("click", () => {
                  secondInput = result.textContent;
                  switch(operator) {

                    case "+":
                        add(firstInput,secondInput)
                        break;
                    
                    case "-":
                        break;

                    case "X":
                        break;

                    case "/":
                        break;

                    default:
                        console.log("evaluate default message")

                  }


                  console.log(
                    "operator = loop:",
                    "FI",
                    firstInput,
                    "SI",
                    secondInput
                  );
                  // sets second input when operator is clicked.
        })
  
                    
    }; 


    


}; calculator()