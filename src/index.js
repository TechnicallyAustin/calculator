function calculatorFunctionality() {
  // add event listeeners to each button.
  // take the value/TextContent of each button and parseInt()
  // push the parsedInt() into an array or hash
  // each button clicked adds the number to the array and will update the display > resultValue

  // the display has a constanly updatetd list of numbers. when an operator button is clicked
  // first number = the current number in the display
  //  each operator will

  function updateDisplay() {}

  function operations() {
    function addition(firstNumber, secondNumber) {}

    function subtraction(firstNumber, secondNumber) {}

    function division(firstNumber, secondNumber) {}

    function multiplicaiton(firstNumber, secondNumber) {}

    function evaluation(firstNumber, secondNumber) {}

    function decimal() {}

    function clear() {}

    function allClear() {}

    function negativeToggle() {}

    function percentage() {}

    function numbers() {
      const numberButtons = document.getElementsByClassName("number");

      function one() {
        const oneButton = numberButtons[0];
        const textValue = oneButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        oneButton.addEventListener("click", () => {
          console.log(numberValue);
        });
      }
      one();

      function two() {
        const twoButton = numberButtons[1];
        const textValue = twoButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        twoButton.addEventListener("click", () => {
          console.log(numberValue);
        });
      }
      two();

      function three() {
        const threeButton = numberButtons[2];
        const textValue = threeButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        threeButton.addEventListener("click", () => {
          console.log(numberValue);
        });
      }
      three();

      function four() {
        const fourButton = numberButtons[3];
        const textValue = fourButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        fourButton.addEventListener("click", () => {
          console.log(numberValue);
        });
      };
      four();

      function five() {
        const fiveButton = numberButtons[4];
        const textValue = fiveButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        fiveButton.addEventListener("click", () => {
          console.log(numberValue);
        });
      }; five()

      function six() {
        const sixButton = numberButtons[5];
        const textValue = sixButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        sixButton.addEventListener("click", () => {
          console.log(numberValue);
        });
      }; six()

      function seven() {
        const sevenButton = numberButtons[6];
        const textValue = sevenButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        sevenButton.addEventListener("click", () => {
          console.log(numberValue);
        });
      }
      seven();

      function eight() {
        const eightButton = numberButtons[7];
        const textValue = eightButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        eightButton.addEventListener("click", () => {
          console.log(numberValue);
        });
      }; eight()

      function nine() {
        const nineButton = numberButtons[8];
        const textValue = nineButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        nineButton.addEventListener("click", () => {
          console.log(numberValue);
        });
      }; nine()

      function zero() {
        const zeroButton = numberButtons[9];
        const textValue = zeroButton.firstChild.textContent;
        const numberValue = parseInt(textValue);
        zeroButton.addEventListener("click", () => {
          console.log(numberValue);
        });
      }; zero()
    };
    numbers();
  };
  operations();
};
calculatorFunctionality();
