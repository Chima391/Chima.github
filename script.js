function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendNumber(number) {
    document.getElementById('display').value += number;
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function square() {
    const displayValue = document.getElementById('display').value;
    document.getElementById('display').value = Math.pow(displayValue, 2);
}

function squareRoot() {
    const displayValue = document.getElementById('display').value;
    document.getElementById('display').value = Math.sqrt(displayValue);
}
