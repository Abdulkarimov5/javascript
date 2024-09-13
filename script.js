/*alert("Я JavaScript!");

let message;
message = "Здравствуй пользователь";
alert(message);

let message1 = "Я помогу тебе в работе с кодом";
alert(message1)

let message2 = "Но сначало...",
    message3 = "Изучи руководсто";
alert(message2);
alert(message3);

const message4 = "Пользователь зарегистрирован 08.09.2024";
alert(message4);

let message5 = "фокусировка";
alert(`Полная ${message5} на изучении JavaScript`);

let name = prompt("Пользователь, введите ваше имя");
alert(`Полученны новые данные, имя пользователя ${name}`);

let work = confirm("Домашняя робата завершенна?");
alert(work);*/

let a = 1, b = 1;

let c = ++a; // c=2
let d = b++; // d=1
alert(c);
alert(d);

let u = 2;

let x = 1 + (u *= 2); // x=5
alert(x)

"" + 1 + 0 // = (Здесь я просто затупил)
"" - 1 + 0 // = -1
true + false // = 1
6 / "3" // = 2
"2" * "3" // = 6
4 + 5 + "px" // = NaN (Немного растерялся из-за переставноки значений, впомнил когда уже ответ посмотрел)
"$" + 4 + 5 // = $45
"4" - 2 // = 2
"4px" - 2 // = NaN
"  -9  " + 5 // = -9  5
"  -9  " - 5 // = -14
null + 1 // = 1
undefined + 1 // = (Забыл как undefined реагирует в примере)
" \t \n" - 2 // = -2

/*let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); = 12*/

let i = prompt("Первое число?", 1);
let o = prompt("Второе число?", 2);

alert(+i + +o); // 12