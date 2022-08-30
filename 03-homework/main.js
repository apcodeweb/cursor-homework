let getMaxDigitLoop = (num) => {
    let max = num % 10;
    let currentNumber = Math.floor(num / 10);
    while (currentNumber > 0) {
        let nextDigit = currentNumber % 10;
        if (nextDigit > max) {
            max = nextDigit;
        }
        currentNumber = Math.floor(currentNumber / 10);

    }
    return max;
}
console.log(getMaxDigitLoop(23214356));



const getPercent = (sum, percent) => sum - (percent / 100) * sum;
console.log(getPercent(345, 50));



const capitalaziString = (str) => str[0].toUpperCase() + str.toLowerCase().slice(1);
console.log(capitalaziString('djskajskdjasd sds sds'));


function deleteLetters(letter, message) {
    let result = '';
    for (let i = 0; i < message.length; i++) {
        message[i] == letter ? result : (result += message[i]);
    }
    return result;
}
console.log(deleteLetters('a', 'warcraft'))



function palindrome(str) {
    str = str.toUpperCase().replace(/\s/g, '');
    return str === str.split('').reverse().join('');

}
console.log(palindrome('no lemon, no melon'))



const getRandomNumber = (N, M) => Math.floor(Math.random() * (M - N) + N);
console.log(getRandomNumber(1, 10));

const generatePassword = (length = 8) => {
    let pass = "";
    while (length > 0) {
        pass += getRandomNumber(1, 10);
        length--;
    }
    return pass;
}
console.log(generatePassword());
console.log(generatePassword(4));

document.writeln(`1.Найбiльше число з 123456789 = ${getMaxDigitLoop(123456789)} <hr>`);
document.writeln(`2.Залишок після оплати податку(18) з 500 = ${getPercent(500,18)} <hr>`);
document.writeln(`3.Формотуэмо з "vOrOna",так щоб перша буква була великою,а всi iншi з маленькоi: ${capitalaziString('vorona')} <hr>`);
document.writeln(`4.Видалимо букву "a" зi cлова "warcraft": ${deleteLetters("a", "warcraft")} <hr>`);
document.writeln(`5.Чи є речення "no lemon, no melon" паліндромом? - ${palindrome("no lemon, no melon")} <hr>`);
document.writeln(`6.Функція, яка повертає випадкове ціле число (наприклад:в діапазоні від 1 до 15): ${getRandomNumber(1,15)} <hr>`)
document.writeln(`7.Функція генерації випадкового паролю (тільки числа), вiзьмемо 17 цифр: ${generatePassword(17)} <hr>`)