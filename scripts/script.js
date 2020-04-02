'use strict';

let isNumber = function(n) {
  return !isNaN(n) && isFinite(n);
}

let getRanomInt = function(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

let n;

alert('Я загадаю число от 1 до 10.\nПопробуй угадай его!');
let r = getRanomInt(1, 10);

let guessNumber = function() {

  n = +prompt('Введи число! Твой вариант: ');

  // Если пользователь нажал "Отмена", игра заканчивается
  if (n == 0)
    return alert('Ой, фсё.');

  // Проверка вводимого числа
  if (isNumber(n) == false) {
    guessNumber();
  }

  if (n > r) {
    alert('Загаданное число меньше.');
    guessNumber();
  } else if (n < r) {
      alert('Загаданное число больше.');
      guessNumber();
    } else {
      return alert('Конгратюляции! Это было оно!');
    }
}

guessNumber();

console.log(n);