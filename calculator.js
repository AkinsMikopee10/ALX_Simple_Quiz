document.addEventListener('DOMContentLoaded', function() {
    

    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const resultSpan = document.getElementById('calculation-result');
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');

    
    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2) {
        // A special check to prevent division by zero, which would result in Infinity.
        if (num2 === 0) {
            return "Error: Cannot divide by zero";
        }
        return num1 / num2;
    }

   
    function getCleanedInputs() {
        
        const num1 = parseFloat(number1Input.value) || 0;
        const num2 = parseFloat(number2Input.value) || 0;
        return { num1, num2 };
    }
    
    
    function updateResult(result) {
        resultSpan.textContent = result;
    }

    
    addButton.addEventListener('click', function() {
        const { num1, num2 } = getCleanedInputs();
        const result = add(num1, num2);
        updateResult(result);
    });

    subtractButton.addEventListener('click', function() {
        const { num1, num2 } = getCleanedInputs();
        const result = subtract(num1, num2);
        updateResult(result);
    });

    multiplyButton.addEventListener('click', function() {
        const { num1, num2 } = getCleanedInputs();
        const result = multiply(num1, num2);
        updateResult(result);
    });

    divideButton.addEventListener('click', function() {
        const { num1, num2 } = getCleanedInputs();
        const result = divide(num1, num2);
        updateResult(result);
    });
});