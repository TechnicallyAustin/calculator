function calculator() {
     const firstInput = 0;
     const secondInput = 0;
     let result = document.querySelector(".result-value")
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

    function operatorButtons() {
         for (let i = 0; i < operators.length; i++){
            let operator = operators[i]
            let value = operator.textContent
            operator.addEventListener("click", () => {
                switch(value) {
                    case "+":
                        console.log(value);
                        break;

                    case "-":
                        console.log(value);
                        break;

                    case "X":
                        console.log(value);
                        break;

                    case "/":
                        console.log(value);
                    break;

                    case "=":
                        console.log(value);
                    break;

                    default:
                        console.log("Operator default message")
                }
            })
         }
    }; operatorButtons()

    function updateDisplay() {}

    function add() {}

    function subtract() {}

    function divide() {}

    function equals() {}


}; calculator()