function calculatorFunctionality() {
  // add event listeeners to each button.
  // take the value/TextContent of each button and parseInt()
  // push the parsedInt() into an array or hash
  // each button clicked adds the number to the array and will update the display > resultValue

  // the display has a constanly updatetd list of numbers. when an operator button is clicked
  // first number = the current number in the display
  //  each operator will

  // ** need to revise the calculator logic
  // **  need to add a sub display that shows the current operation
  // ** adjust the AC/C toggle to just AC and change +/- to C 

  const displayValue = document.querySelector(".result-value");
  const previousEvaluation = document.querySelector(".previous-result")


  function operations() {
    const operatorButtons = document.getElementsByClassName("operator");
    const auxButtons = document.getElementsByClassName("aux");
    let firstInput;
    let secondInput;

    function operationEvents() {
      for (let i = 0; i < operatorButtons.length - 1; i++) {
        let button = operatorButtons[i];
        let textValue = button.firstChild.textContent;
        button.addEventListener("click", () => {
                if (displayValue.textContent === " ") {
                  console.log("empty");
                } else {
                    firstInput = parseInt(displayValue.textContent)
                     previousEvaluation.textContent = `${firstInput + " "} ${
                       textValue + " "
                     } `;
                     displayValue.textContent = " "; 
                  //console.log("filled", firstInput);
                }


          console.log(`${textValue} button hit`, firstInput, textValue);
          evaluation(textValue);
        });
      }
    }
    operationEvents();

    function evaluation(operator) {
      console.log("evaluation() first input", firstInput);
      const equalButton = operatorButtons[4];
      const textValue = equalButton.firstChild.textContent;
     

      equalButton.addEventListener("click", () => {
        secondInput = parseInt(displayValue.textContent);
        console.log("evaluation() event() second input", secondInput)
         const evalMsg = `${firstInput + " "} ${operator + " "} ${
           secondInput + " "
         } ${textValue}`;

         console.log(evalMsg)

        if (operator === "+") {

          let result = firstInput + secondInput;
           console.log("operator add first input" ,firstInput);
           previousEvaluation.textContent = evalMsg
          displayValue.textContent = `${result}`;
          firstInput = result
          secondInput = 0

        } else if (operator === "-") {
          let result = firstInput - secondInput;
          previousEvaluation.textContent = evalMsg;
          displayValue.textContent = `${result}`;

        } else if (operator === "X") {
          let result = firstInput * secondInput;
          previousEvaluation.textContent = evalMsg;
          displayValue.textContent = `${result}`;

        } else if (operator === "/") {
          let result = firstInput / secondInput;
          previousEvaluation.textContent = evalMsg;
          displayValue.textContent = `${result}`
        }
      });
    }


    function clearToggle() {
      const clearButton = auxButtons[0];
      clearButton.addEventListener("click", () => {
        if (clearButton.firstChild.textContent === "C") {
          clearButton.firstChild.textContent = "AC";
          console.log(displayValue.textContent);
          if (displayValue.textContent !== " ") {
            displayValue.textContent = " ";
            console.log("All Clear", "fi", firstInput, "si", secondInput);
          }
        } else if (clearButton.firstChild.textContent === "AC") {
          clearButton.firstChild.textContent = "C";
          if (displayValue.textContent === " ") {
            firstInput = 0;
            console.log(firstInput);
          }
          console.log("Clear", "fi", firstInput, "si", secondInput);
          clearButton.firstChild.textContent = "C";
        }
      });
    }
    clearToggle();

    function negativeToggle() {
      const negativeButton = auxButtons[1];
      negativeButton.addEventListener("click", () => {
        if (negativeButton.getAttribute("value") === "off") {
          negativeButton.setAttribute("value", "on");
          console.log("negative on");
          // makes the current number negative
        } else if (negativeButton.getAttribute("value") === "on") {
          negativeButton.setAttribute("value", "off");
          console.log("negative off");
          // makes the current number positive
        }
      });
    }
    negativeToggle();

    function percentage() {
      const percentButton = auxButtons[2];
      percentButton.addEventListener("click", () => {
        console.log("percent clicked");
      });
    }
    percentage();

    function decimal() {
      const decimalButton = auxButtons[3];
      decimalButton.addEventListener("click", () => {
        console.log("decimal clicked");
      });
    }
    decimal();

    function numbers() {
      const numberButtons = document.getElementsByClassName("number");

      function numberEvents() {
        for (let i = 0; i < numberButtons.length; i++) {
          let button = numberButtons[i];
          let textValue = button.firstChild.textContent;
          button.addEventListener("click", () => {
            displayValue.textContent += textValue;
          });
        }
      }
      numberEvents();
    }
    numbers();
  }
  operations();
}
calculatorFunctionality();
