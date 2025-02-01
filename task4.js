let word = prompt("Введите слово:");
let wordLength = word.length; // xran kol-wo slov
let sqrt = Math.floor(Math.sqrt(wordLength));

let result = (sqrt * sqrt === wordLength) ? 1 : 0;

alert("Результат: " + result);