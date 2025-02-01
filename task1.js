function formatSalary(price, range) {
    let formattedPrice = price.toLocaleString('ru-RU'); 
    return `${formattedPrice} Р в ${convertRange(range)}`;
}

function convertRange(value) {
    if (value === 'month') {
        return 'месяц';
    } else if (value === 'day') {
        return 'день';
    } else if (value === 'week') {
        return 'неделю';
    } else {
        return null;
    }
}


let range;
while (true) {
    range = prompt('Выберите month/day/week'); 
    if (convertRange(range) !== null) {
        break; 
    } else {
        alert('Вы не выбрали корректный диапазон');
    }
}

let price = +prompt('Введите сумму в рублях'); 
alert(formatSalary(price, range));

console.assert(formatSalary(10000, 'day') === "10 000 Р в день", 'Test 1 Failed');
console.assert(formatSalary(70000, 'month') === "70 000 Р в месяц", 'Test 2 Failed');
console.assert(formatSalary(30000, 'week') === "30 000 Р в неделю", 'Test 3 Failed');