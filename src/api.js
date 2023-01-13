function createCalculator() {
    const calculator = document.body.appendChild(document.createElement("div"));
    calculator.setAttribute("class", "calculator");

    function DisplayBox() {
        const displayContainer = calculator.appendChild(document.createElement("div"));
        displayContainer.setAttribute("class", "display-container");

        const display = displayContainer.appendChild(document.createElement("div"));
        display.setAttribute("class", "display");
    }; DisplayBox()

    function buttons() {
        const buttonContainer = calculator.appendChild(document.createElement("div"));
        buttonContainer.setAttribute("class", "number-container")

        function numbers() {

            function zeroButton() {
                const zero = buttonContainer.appendChild(document.createElement("div"));
                zero.setAttribute("class", "number zero button")
            }; zeroButton()

            function oneButton() {
                const one = buttonContainer.appendChild(document.createElement("div"));
                one.setAttribute("class", "number one button")
            }; oneButton()

            function twoButton() {
                const two = buttonContainer.appendChild(document.createElement("div"));
                two.setAttribute("class", "number two button")
            }; twoButton()

            function threeButton() {
                const three = buttonContainer.appendChild(document.createElement("div"));
                three.setAttribute("class", "number three button")
            }; threeButton()

            function fourButton() {
                const four = buttonContainer.appendChild(document.createElement("div"));
                four.setAttribute("class", "number four button")
            }; fourButton()

            function fiveButton() {
                const five = buttonContainer.appendChild(document.createElement("div"));
                five.setAttribute("class", "number five button")
            }; fiveButton()

            function sixButton() {
                const six = buttonContainer.appendChild(document.createElement("div"));
                six.setAttribute("class", "number six button")
            }; sixButton()

            function sevenButton() {
                const seven = buttonContainer.appendChild(document.createElement("div"));
                seven.setAttribute("class", "number seven button")
            }; sevenButton()

            function eightButton() {
                const eight = buttonContainer.appendChild(document.createElement("div"));
                eight.setAttribute("class", "number eight button")
            }; eightButton()

            function nineButton() {
                const nine = buttonContainer.appendChild(document.createElement("div"));
                nine.setAttribute("class", "number nine button")
            }; nineButton()
        }; numbers()

        function operators() {
            function addButton() {
                const add = buttonContainer.appendChild(document.createElement("div"));
                add.setAttribute("class", "operator add button")
            }; addButton()

            function subtractButton() {
                const subtract = buttonContainer.appendChild(document.createElement("div"));
                subtract.setAttribute("class", "operator subtract button")
            }; subtractButton()

            function multiplyButton() {
            const multiply = buttonContainer.appendChild(document.createElement("div"));
            multiply.setAttribute("class", "operator multiply button");
            }; multiplyButton()

            function divideButton() {
                const divide = buttonContainer.appendChild(document.createElement("div"));
                divide.setAttribute("class", "operator divide button")
            } divideButton()

            function exponentButton() {
                const exponent = buttonContainer.appendChild(document.createElement("div"));
                exponent.setAttribute("class", "operator exponent button")
            }; exponentButton()

            function squareRootButton() {
                const squareRoot = buttonContainer.appendChild(document.createElement("div"));
                squareRoot.setAttribute("class", "operator squareRoot button")
            }; squareRootButton()

            function equalsButton() {
                const equals = buttonContainer.appendChild(document.createElement("div"));
                equals.setAttribute("class", "operator equals button")
            }; equalsButton()

        }; operators()

    }; buttons()

    


}; createCalculator()