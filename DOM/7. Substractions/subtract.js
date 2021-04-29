function subtract() {
    let firstNum = document.getElementById('firstNumber');
    let secondNum = document.getElementById('secondNumber');
    let resultField = document.getElementById('result')

    let result = Number(firstNum.value) - Number(secondNum.value);
    resultField.textContent = result;
}
