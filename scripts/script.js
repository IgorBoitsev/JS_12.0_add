'use strict';
// Функция проверки на число
let isNumber = function(n) {
  return !isNaN(n) && isFinite(n);
}
// Функция задания случайного числа
let getRanomInt = function(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

let n, r, c, t;

// ----------------------------------------------
alert('Я загадаю число от 1 до 10.\nПопробуй угадай его!');
r = getRanomInt(1, 10);

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

console.log('Загаданное число: ' + r);

// ----------------------------------------------
// Функция подготовки к игре
// let guessNumberPreparation = function() {
//   // Количество попыток
//   t = 10;
//   alert('Я загадаю число от 1 до 10.\nПопробуй угадай его! У тебя всего ' + t + ' попыток!');
//   r = getRanomInt(1, 10);
//   c = 0;
// }

// let guessNumber = function(t, c) {

//   if (t == 0) {
//     if (confirm('У тебя больше не осталось попыток. Хотите сыграть еще')) {
//       guessNumberPreparation();
//       guessNumber(t, c);
//     } else {
//         return alert('Ой, фсё.');
//       }
//   }
//   c += 1;

//   n = +prompt('Введи число! У тебя ' + t + ' попыток. Твой вариант: ');

//   // Если пользователь нажал "Отмена", игра заканчивается
//   if (n == 0)
//     return alert('Ой, фсё.');

//   // Проверка вводимого числа
//   if (isNumber(n) == false) {
//     guessNumber(t, c);
//   }

//   if (n > r) {
//     alert('Загаданное число меньше.');
//     guessNumber(t - 1, c);
//   } else if (n < r) {
//       alert('Загаданное число больше.');
//       guessNumber(t - 1, c);
//     } else if (confirm('***Конгратюляции!***\nЭто было оно!\nТы смог угадать с ' + c + ' раза!\nХочешь сыграть еще?')) {
//         guessNumberPreparation();
//         guessNumber(t, c);
//       } else
//       return alert('Ой, фсё.');
// }

// guessNumberPreparation();
// guessNumber(t, c);

// console.log('Загаданное число: ' + r);