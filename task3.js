function numberInput(check) {
    let number;
    do {
        number = parseFloat(prompt(check));
        if (isNaN(number)) {
            alert("Ошибка: введено не число. Пожалуйста, введите число.");
        }
    } while (isNaN(number));
    return number;
}

function checkOperator() {
    let operator;
    do {
        operator = prompt("Введите оператор (+, -, *, /)");
        if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
            alert("Ошибка: неверный оператор. Пожалуйста, выберите один из следующих: +, -, *, /.");
        }
    } while (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/");
    return operator;
}

let firstNumber = numberInput("Введите первое число");
let towNumber = numberInput("Введите второе число");

let operator = checkOperator();

if (operator == "+") {
    alert("Результат: " + (firstNumber + towNumber));
} else if (operator == "-") {
    alert("Результат: " + (firstNumber - towNumber));
} else if (operator == "*") {
    alert("Результат: " + (firstNumber * towNumber));
} else if (operator == "/") {
    if (towNumber === 0) {
        alert("Ошибка: делить на 0 нельзя.");
    } else {
        alert("Результат: " + (firstNumber / towNumber));
    }
}

// Я не понял как писать тесты /(`_`)/