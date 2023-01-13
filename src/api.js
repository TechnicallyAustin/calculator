function createCalculator() {
    const calculator = document.body.appendChild(document.createElement("div"));
    calculator.setAttribute("class", "calculator");

    function DisplayBox() {
        const displayContainer = calculator.appendChild(document.createElement("div"));
        displayContainer.setAttribute("class", "display-container");

        const display = displayContainer.appendChild(document.createElement("div"));
        display.setAttribute("class", "display");
    }; DisplayBox()

    function numbers() {
        const numberContainer = calculator.appendChild(document.createElement("div"));
        numberContainer.setAttribute("class", "number-container")

        function zeroButton() {
            const zero = numberContainer.appendChild(document.createElement("div"));
            zero.setAttribute("class", "number one")
        };
        function oneButton() {
            const one = numberContainer.appendChild(document.createElement("div"));
            one.setAttribute("class", "number one")
        };
        function twoButton() {
            const two = numberContainer.appendChild(document.createElement("div"));
            two.setAttribute("class", "number one")
        };
        function threeButton() {
            const three = numberContainer.appendChild(document.createElement("div"));
            three.setAttribute("class", "number one")
        };
        function fourButton() {
            const four = numberContainer.appendChild(document.createElement("div"));
            four.setAttribute("class", "number one")
        };
        function fiveButton() {
            const five = numberContainer.appendChild(document.createElement("div"));
            five.setAttribute("class", "number one")
        };
        function sixButton() {
            const six = numberContainer.appendChild(document.createElement("div"));
            six.setAttribute("class", "number one")
        };
        function sevenButton() {
            const seven = numberContainer.appendChild(document.createElement("div"));
            seven.setAttribute("class", "number one")
        };
        function eightButton() {
            const eight = numberContainer.appendChild(document.createElement("div"));
            eight.setAttribute("class", "number one")
        };
        function nineButton() {
            const nine = numberContainer.appendChild(document.createElement("div"));
            nine.setAttribute("class", "number one")
        };
    }; numbers()

    function operators() {
        function addButton() {}
        function subtractButton() {}
        function multiplyButton() {}
        function divideButton() {}
        function exponentButton() {}
        function squareRootButton() {}
        function equalsButton() {}
    }



}; createCalculator()