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
alert(work);

let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

alert(a + b);*/

const number = prompt ("Введите число")

function getPositivnes(value) {
    if (value > 0) {
        return 1
    } else if (value < 0) {
        return -1
    } else {
        return 0
    }
}

console.log(getPositivnes(number))