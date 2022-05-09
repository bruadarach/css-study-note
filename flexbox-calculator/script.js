const calculator = document.querySelector('.calculator'); 
const buttons = calculator.querySelector('.button'); 

const firstOperend = document.querySelector('.calculator__operend--left'); 
let operator = document.querySelector('.calculator__operator'); 
const secondOperend = document.querySelector('.calculator__operend--right'); 
const calculatedResult = document.querySelector('.calculator__result'); 


const display = document.querySelector('.calculator__display--for-advanced'); 
let firstNum, operatorForAdvanced, previousKey, previousNum;



buttons.addEventListener('click', function (event) { // 버튼을 눌렀을 때 작동하는 함수입니다.
  
    const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
    const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
    const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.

    if (target.matches('button')) {

        if (action == 'number') {
            console.log(buttonContent);
            if (display.textContent === 0 || previousKey === 'operator') {
                display.textContent = buttonContent;
            } else {
                display.textContent = display.textContent + buttonContent;
            }
            previousKey = 'number';
        }

        if (action == 'operator') {
            operatorForAdvanced = buttonContent;
            firstNum = display.textContent;
            previousKey = 'operator';
        }

        if (action == 'decimal') {}

        if (action == 'calculate') {
            previousNum = display.textContent;
            display.textContent = calculate(firstNum,operatorForAdvanced,previousNum);
            previousKey = 'calculate';
        }

        if (action == 'clear') {
            display.textContent = '0';
            firstNum = undefined;
            operatorForAdvanced = undefined;
            previousNum = undefined;
            previousKey = 'clear';
        }
    }

});