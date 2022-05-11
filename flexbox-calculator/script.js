const calculator = document.querySelector('.calculator'); 
const buttons = calculator.querySelector('.buttons'); 
const display = document.querySelector('.calculator__display--for-advanced'); 
let firstNum, operatorForAdvanced, previousKey, previousNum;

function calculate(n1, operator, n2) {
    let result = 0;
  
    if (operator === '+') {
      result = Number(n1) + Number(n2);
    } else if (operator === "-") {
      result = Number(n1) - Number(n2);
    } else if (operator === "*") {
      result = Number(n1) * Number(n2);
    } else if (operator === "÷") {
      result = Number(n1) / Number(n2);
    }
  
    return String(result);
}

buttons.addEventListener('click', function (event) { // 버튼을 눌렀을 때 작동하는 함수입니다.
  
    const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
    const action = target.classList[1]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
    const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.

    if (target.matches('button')) {

        // if (action === 'number') {
        //     if (display.textContent === 0 || previousKey === 'operator') {
        //         display.textContent = buttonContent;
        //     } else {
        //         display.textContent = display.textContent + buttonContent;
        //     }
        //     previousKey = 'number';
        // }
        if (action === 'number') {
            if (display.textContent === '0' || previousKey === 'operator' || previousKey === 'calculate') {
             display.textContent = buttonContent;
           } else { //display.textContent !== '0' && previousKey === "number") {
            display.textContent = display.textContent + buttonContent;
           } 
          //  else if (operatorForAdvanced !== undefined && previousKey === "operator") {
          //    firstNum = display.textContent;
          //    display.textContent = buttonContent; 
          //  } 
           previousKey = "number";
         }

        if (action === 'operator') {
            // operatorForAdvanced = buttonContent;
            // firstNum = display.textContent;
            // previousKey = 'operator';
            if (firstNum && operatorForAdvanced && previousKey !== 'operator' && previousKey !== 'calculate') {
              display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
            }
            firstNum = display.textContent;
            operatorForAdvanced = buttonContent;
            previousKey = 'operator';
        }

        if (action === 'decimal') {
          if (!display.textContent.includes('.')) {
            display.textContent = display.textContent + '.';
          } else if (previousKey === 'operator') {
            display.textContent = '0.';
          }
          previousKey = 'decimal';
        }

        if (action === 'calculate') {
          if (firstNum) {
            previousNum = display.textContent;
            let finalResult = calculate(firstNum,operatorForAdvanced,previousNum)

            if (finalResult.includes('.')) {
              finalResult = Number(finalResult).toFixed(8);
              display.textContent = String(finalResult);
            }
            display.textContent = finalResult;
            previousKey = 'calculate';
          }  
        }

        if (action === 'clear') {
            display.textContent = '0';
            firstNum = undefined;
            operatorForAdvanced = undefined;
            previousNum = undefined;
            previousKey = 'clear';
        }
    }

});