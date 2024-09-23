/* let age = prompt("Введите число");

switch (true) {
    case (age >= 0 && age <=12):
        alert ( 'Ребенок' );
        break;

    case (age >= 12 && age <= 18):
        alert( 'Подросток');
        break;

    case (age >= 18 && age <= 60):
        alert( 'Взрослый' );
        break;

    case (age >= 60):
        alert( 'Пенсионер' );
        break;

    default:
        alert( 'Кто вы?' );
} */

/* let symbol = prompt("Введите число");

switch (+symbol) {
    case 1 :
        alert ('!');
        break;

    case 2 :
        alert ('@');
        break;

    case 3 :
        alert ('#');
        break;

    case 4 :
        alert ('$');
        break;

    case 5 :
        alert ('%');
        break;

    case 6 :
        alert ('^');
        break;

    case 7 :
        alert ('&');
        break;

    case 8 :
        alert ('*');
        break;

    case 9 :
        alert ('(');
        break;

    case 0 :
        alert (')');
        break;

    default:
        alert('Значение не найдено')
} */

/* let sum = 0;

while (true) {
let value = +prompt("Введите число");

if (!value) break;
sum += value;

}
alert( 'Сумма: ' + sum ); */

// const userInput1 = +prompt("Введите число")
// const userInput2 = +prompt("Введите число")
// const userInput3 = prompt("Введите знак")

/* function isPositive(number) {
    if (number > 0) {
        return "Положительное"
    } else if (number < 0) {
        return "Отрицательное"
    } else if (number === 0) {
        return "Ноль"
    } else {
        return "Введено некорректное число"
    }
}

alert(isPositive(userInput)) */

/* function isValiAge(age) {
    if (age <= 120 && age >= 0) {
        return "Возраст корректный"
    }

    return "Возраст не коррект"
}

alert(isValiAge(userInput)) */

/* function getModule(number) {
    if (number < 0) {
        return number/-1
    } else if (number > 0) {
        return number
    } else {
        return "Некорректый ввод"
    }
}

alert(getModule(userInput)) */

/* function getGreater(num1, num2) {
    return num1 >= num2 ? num1 : num2
}

alert(getGreater(userInput1, userInput2)) */

/* function isKratno5(number) {
    // return number % 5 ? "Не кратно" : "Кратно"
    if (number % 5 !== 0) {
        return "Не кратно"
    } else if (number % 5 === 0) {
        return "Кратно"
    }
}

alert(isKratno5(userInput1)) */

/* function isEarth(planet) {
    planet = planet.toLowerCase()

    // return `Привет, ${planet === 'земля' ? 'землянин' : 'инопланетянин' }!`

    return palnet === 'земля' ?
    'Привет, землянин!' :
    'Привет, инопланетянин!'
}

alert(isEarth(userInput1)) */

/* function getLess(num1, num2) {
    return num1 <= num2 ? num1 : num2
}

alert(getLess(userInput1, userInput2)) */

/* function pow(num, p) {
    let result = 1
    while(p) {
        p--
        result = result * num
    }
    return result
}

alert(pow(userInput1, userInput2)) */

/* function calculate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return "Будь внимательнее!"
    }
}

alert(calculate(userInput1, userInput2, userInput3)) */

/* function mod(num1, num2) {
    if (num1 < num2) {
        return num1
    } else if (num1 === num2) {
        return 0
    } else {
        let result = num2
        while(result <= num1) {
            result += num2
        }
        return num1 - (result - num2)
    }
}
// при желании в местах подобных isKratno5 можно сделать так: return mod(number, 5) ? "Не кратно" : "Кратно" !!! Таким образом одна функция рабоатет в другой
alert(mod(userInput1, userInput2)) */
