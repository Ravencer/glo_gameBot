'use strict';

let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};


function guessNum(){
  let guess = Math.floor(1 + Math.random() * (100 + 1 - 1));
  console.log(guess);
  let tries = 10;
  function checkNum(textCheck){
    let x = prompt(textCheck);
    if(tries === 0){
      if(confirm('Попытки закончились, хотели бы сыграть еще?') === true){
        guessNum('Угадай число от 1 до 100', 10);
      }
    }
    else if(x === null){
      alert('Игра окончена');
    }
    else if(!isNumber(x)){
      checkNum('Введи число!');
    }
    else if(Number(x) > guess){
      tries--;
      checkNum('Загаданное число меньше, осталось попыток ' + tries);
    }
    else if(Number(x) < guess){
      tries--;
      checkNum('Загаданное число больше, осталось попыток ' + tries);
    }
    else if(Number(x) === guess){
      if(confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?') === true){
        guessNum('Угадай число от 1 до 100', 10);
      }
    }
    
  }
  checkNum('Угадай число от 1 до 100');
}

guessNum();

