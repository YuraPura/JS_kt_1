let temp = Number(prompt('Задайте температуру (число)'));
while (isNaN(temp)) {
    alert('Введите корректное число!');
    temp = Number(prompt('Задайте температуру (число)'));
}

let weather = prompt('Выберите погоду: clear/cloudy').toLowerCase();
while (weather !== "clear" && weather !== "cloudy") {
    alert('Выберите "clear" или "cloudy"');
    weather = prompt('Выберите погоду: clear/cloudy').toLowerCase();
}

let activity;

if (temp >= 25 && weather === "clear") {
    activity = "golf";
} else if ((temp >= 10 && temp <= 24) || weather === "cloudy") {
    activity = "bowling";
} else {
    activity = "hiking";
}

alert(activity);

console.assert(checkActivity(25, "clear") === "golf", 'Test 1 Failed');
console.assert(checkActivity(15, "clear") === "bowling", 'Test 2 Failed');
console.assert(checkActivity(5, "rainy") === "hiking", 'Test 3 Failed');
