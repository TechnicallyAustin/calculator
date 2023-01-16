function calculatorFunctionality() {
  // add event listeeners to each button.
  // take the value/TextContent of each button and parseInt()
  // push the parsedInt() into an array or hash
  // each button clicked adds the number to the array and will update the display > resultValue

  // the display has a constanly updatetd list of numbers. when an operator button is clicked
  // first number = the current number in the display
  //  each operator will


  const displayArray = [];
  let displayValue = document.querySelector(".result-value");
  function updateDisplay(evt) {
    // array.push(evt)
        // creates a running list of numbers entered.


  }



  function operations() {
    const operatorButtons = document.getElementsByClassName("operator")
    const auxButtons = document.getElementsByClassName("aux");

    function addition() {
        const addButton = operatorButtons[0]
        const textValue = addButton.firstChild.textContent
        addButton.addEventListener("click", () => {
            console.log(textValue)
        })


    }; addition()

    function subtraction() {
        const subtractButton = operatorButtons[1]
        const textValue = subtractButton.firstChild.textContent
        subtractButton.addEventListener("click", () => {
            console.log(textValue)
        })
    }; subtraction()

    function division() {
            const divideButton = operatorButtons[2];
            const textValue = divideButton.firstChild.textContent;
            divideButton.addEventListener("click", () => {
              console.log(textValue);
            });
    }; division()

    function multiplicaiton() {
            const multiplyButton = operatorButtons[3];
            const textValue = multiplyButton.firstChild.textContent;
            multiplyButton.addEventListener("click", () => {
              console.log(textValue);
            });
    }; multiplicaiton()

    function evaluation() {
            const equalButton = operatorButtons[4];
            const textValue = equalButton.firstChild.textContent;
            equalButton.addEventListener("click", () => {
              console.log(textValue);
            });
    }; evaluation()

    function clearToggle() {
        const clearButton = auxButtons[0]
        clearButton.addEventListener("click", () =>{
            if (clearButton.firstChild.textContent === "C"){
            clearButton.firstChild.textContent = "AC"
            console.log("All Clear")
            // clears all numbers
            }
            else if (clearButton.firstChild.textContent === "AC") {
                clearButton.firstChild.textContent = "C"
                // clears the current number
                console.log("Clear")
            }
        })
    }; clearToggle()


    function negativeToggle() {
         const negativeButton = auxButtons[1];
         negativeButton.addEventListener("click", () => {
           if (negativeButton.getAttribute("value") === "off") {
             negativeButton.setAttribute("value", "on");
             console.log("negative on")
             // makes the current number negative
           } else if (negativeButton.getAttribute("value") === "on") {
             negativeButton.setAttribute("value", "off");
             console.log("negative off")
             // makes the current number positive
           }
         });
    }; negativeToggle()

    function percentage() {
        const percentButton = auxButtons[2];
        percentButton.addEventListener("click", () => {
            console.log("percent clicked")
        })
    }; percentage()

        function decimal() {
            const decimalButton = auxButtons[3]
            decimalButton.addEventListener("click", () => {
                console.log("decimal clicked")
            })
        }; decimal()


    function numbers() {
      const numberButtons = document.getElementsByClassName("number");

      function listNumbers() {
        displayValue.textContent += textValue;
        console.log(displayValue.textContent, textValue);
      }

      function one() {
        const oneButton = numberButtons[0];
        let textValue = oneButton.firstChild.textContent;
        //const numberValue = parseInt(textValue);
        oneButton.addEventListener("click", () => {
            displayValue.textContent += textValue
            console.log(displayValue.textContent, textValue)
        });
      }
      one();

      function two() {
        const twoButton = numberButtons[1];
        const textValue = twoButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        twoButton.addEventListener("click", () => {
                 displayValue.textContent += textValue;
                 console.log(displayValue.textContent, textValue);
          console.log(numberValue);
        });
      }
      two();

      function three() {
        const threeButton = numberButtons[2];
        const textValue = threeButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        threeButton.addEventListener("click", () => {
                 displayValue.textContent += textValue;
                 console.log(displayValue.textContent, textValue);
          console.log(numberValue);
        });
      }
      three();

      function four() {
        const fourButton = numberButtons[3];
        const textValue = fourButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        fourButton.addEventListener("click", () => {
                 displayValue.textContent += textValue;
                 console.log(displayValue.textContent, textValue);
          console.log(numberValue);
        });
      };
      four();

      function five() {
        const fiveButton = numberButtons[4];
        const textValue = fiveButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        fiveButton.addEventListener("click", () => {
                 displayValue.textContent += textValue;
                 console.log(displayValue.textContent, textValue);
          console.log(numberValue);
        });
      }; five()

      function six() {
        const sixButton = numberButtons[5];
        const textValue = sixButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        sixButton.addEventListener("click", () => {
                 displayValue.textContent += textValue;
                 console.log(displayValue.textContent, textValue);
          console.log(numberValue);
        });
      }; six()

      function seven() {
        const sevenButton = numberButtons[6];
        const textValue = sevenButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        sevenButton.addEventListener("click", () => {
                 displayValue.textContent += textValue;
                 console.log(displayValue.textContent, textValue);
          console.log(numberValue);
        });
      }
      seven();

      function eight() {
        const eightButton = numberButtons[7];
        const textValue = eightButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        eightButton.addEventListener("click", () => {
                 displayValue.textContent += textValue;
                 console.log(displayValue.textContent, textValue);
          console.log(numberValue);
        });
      }; eight()

      function nine() {
        const nineButton = numberButtons[8];
        const textValue = nineButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        nineButton.addEventListener("click", () => {
                 displayValue.textContent += textValue;
                 console.log(displayValue.textContent, textValue);
          console.log(numberValue);
        });
      }; nine()

      function zero() {
        const zeroButton = numberButtons[9];
        const textValue = zeroButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        zeroButton.addEventListener("click", () => {
                 displayValue.textContent += textValue;
                 console.log(displayValue.textContent, textValue);
          console.log(numberValue);
        });
      }; zero()

    };
    numbers();
  };
  operations();
};
calculatorFunctionality();
