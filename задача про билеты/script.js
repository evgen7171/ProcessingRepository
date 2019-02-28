'use strict';

let numberTiket = +prompt("Введите номер билета (6 цифр):");
if ((numberTiket > 100000) && (numberTiket < 999999)) {

    let digit6 = numberTiket % 10;
    numberTiket =  Math.trunc(numberTiket / 10);
    let digit5 = numberTiket % 10;
    numberTiket =  Math.trunc(numberTiket / 10);
    let digit4 = numberTiket % 10;
    numberTiket =  Math.trunc(numberTiket / 10);
    let digit3 = numberTiket % 10;
    numberTiket =  Math.trunc(numberTiket / 10);
    let digit2 = numberTiket % 10;
    numberTiket =  Math.trunc(numberTiket / 10);
    let digit1 = numberTiket % 10;
    numberTiket =  Math.trunc(numberTiket / 10);

    if ((digit1 + digit2 + digit3) === (digit4 + digit5 + digit6))
        alert("Ваш билет - счастливый");
    else
        alert("Ваш билет - несчастливый");
}
else
    alert("Вы не ввели 6 цифр:");