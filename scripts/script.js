'use strict';
// Функция проверки на число
let isNumber = function(n) {
  return !isNaN(n) && isFinite(n);
}
// Функция задания случайного числа
let getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

// ----------------------------------------------
let guessNumberPreparation = function() {

  alert('Я загадаю число от 1 до 10.\nПопробуй угадай его!');
  let random = getRandomInt(1, 10);

  let guessNumber = function() {

    let number = +prompt('Введи число! Твой вариант: ');
  
    // Если пользователь нажал "Отмена", игра заканчивается
    if (number == 0)
      return alert('Ой, фсё.');
  
    // Проверка вводимого числа
    if (isNumber(number) == false) {
      guessNumber();
    }
  
    if (number > random) {
      alert('Загаданное число меньше.');
      guessNumber();
    } else if (number < random) {
        alert('Загаданное число больше.');
        guessNumber();
      } else {
        console.log('Загадано было число: ' + random);
        return alert('***Конгратюляции!*** Это было оно!');
      }
  }

  return guessNumber();
}

guessNumberPreparation();

// ----------------------------------------------
// Функция подготовки к игре
// let guessNumberPreparation = function() {
//   // Количество попыток
//   let attempt = 10;
//   alert('Я загадаю число от 1 до 10.\nПопробуй угадай его! У тебя всего ' + attempt + ' попыток!');
//   let random = getRandomInt(1, 10);
//   let count = 0;

//   let guessNumber = function(attempt, count) {

//     if (attempt == 0) {
//       if (confirm('У тебя больше не осталось попыток. Хотите сыграть еще')) {
//         guessNumberPreparation();
//         guessNumber(attempt, count);
//       } else {
//           return alert('Ой, фсё.');
//         }
//     }
//     count += 1;
  
//     number = +prompt('Введи число! У тебя ' + attempt + ' попыток. Твой вариант: ');
  
//     // Если пользователь нажал "Отмена", игра заканчивается
//     if (number == 0)
//       return alert('Ой, фсё.');
  
//     // Проверка вводимого числа
//     if (isNumber(number) == false) {
//       guessNumber(attempt, count);
//     }
  
//     if (number > random) {
//       alert('Загаданное число меньше.');
//       guessNumber(attempt - 1, count);
//     } else if (number < random) {
//         alert('Загаданное число больше.');
//         guessNumber(attempt - 1, count);
//       } else if (confirm('***Конгратюляции!***\nЭто было оно!\nТы смог угадать с ' + count + ' раза!\nХочешь сыграть еще?')) {
//           guessNumberPreparation();
//           guessNumber(attempt, count);
//         } else {
//           console.log('Загаданное число: ' + random);
//           return alert('Ой, фсё.');
//           }
//   }

//   return guessNumber(attempt, count);
// }

// guessNumberPreparation();
// console.log(attempt);
// console.log(random);