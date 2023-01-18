# calculator
This script is a calculator function that runs when the page is loaded. It uses event listeners to detect when number buttons, operator buttons, and modifier buttons (such as "AC" and "C") are clicked.

 When a number button is clicked, the number is displayed in a "result" field on the page.
 
  When an operator button is clicked, the current value in the "result" field is stored as the "firstInput" variable, and the operator is stored in a "previousOperator" variable.
  
   The "result" field is then cleared, and the previous operator and first input are displayed in a "previousResult" field.
   
    When the "=" button is clicked, the current value in the "result" field is stored as the "secondInput" variable, and the operator stored in "previousOperator" is used to perform a calculation on the two inputs (firstInput and secondInput).
    
     The result is displayed in the "result" field, and the full calculation is displayed in the "previousResult" field.