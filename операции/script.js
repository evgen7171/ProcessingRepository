'use strict';

let text1 = 10 + 10 + "10"; //первый плюс - арифметический, второй конкатенция строк
let text2 = 10 + "10" + 10; //конкатенция строк
let text3 = 10 + 10 + + 10; //+ + значит что один плюс бинарный, а второй унарный (+10 = 10, 10+10+10=30)
let text4 = 10 / - "";      //делим число 10 на строку "" ( = 0) - результат бесконечность (в js так)
let text5 = 10 / + "2,5";   //делим число 10 на строку "2,5" - результат "не число"

console.log(text1 + "   - тип: " + typeof (text1));
console.log(text2 + "   - тип: " + typeof (text2));
console.log(text3 + "   - тип: " + typeof (text3));
console.log(text4 + "   - тип: " + typeof (text4));
console.log(text5 + "   - тип: " + typeof (text5));
