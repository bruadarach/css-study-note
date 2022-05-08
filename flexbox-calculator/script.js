const calculator = document.querySelector('.calculator');
const buttons = calculator.querySelector('.buttons');

const firstOperend = document.querySelector('.calculator__operend--left');
const operator = dcument.querySelector('.calculator__operator');
const seondOperend = document.querySelector('.calculator__operend--right');
const calculatedResult = document.querySelector('.calculator__result');

const display = document.querySelector('calculator__display--for-advanced');
let firstNum, operatorForAdvanced, previousKey, previousNum;


buttons.addEventListener('click', function (event) {
    const target = event.target;
    const action = target.classList[0];
    const buttonContent = target.textContent;

    if (target.matches('button')) {

        if (action == 'number') {}

        if (action == 'operator') {}

        if (action == 'decimal') {}

        if (action == 'clear') {}

        if (action == 'calculate') {}
    }

})