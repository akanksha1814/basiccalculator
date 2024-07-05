function addToDisplay(value) {
    document.forms['calculatorForm']['display'].value += value;
}

function clearDisplay() {
    document.forms['calculatorForm']['display'].value = '';
}

function deleteLast() {
    let currentValue = document.forms['calculatorForm']['display'].value;
    document.forms['calculatorForm']['display'].value = currentValue.slice(0, -1);
}

function calculate() {
    let currentValue = document.forms['calculatorForm']['display'].value;
    currentValue = currentValue.replace('%', '/100');
    let result = eval(currentValue);
    document.forms['calculatorForm']['display'].value = result;
}
