do {
    let userFirstNumber = parseInt(prompt('Введіть число', ));
    if (userFirstNumber) {
        alert('Congrats!');
    } else {
        alert('Тільки число!');
    }
} while (!userFirstNumber);
alert('adsasd')
do {
    let userSecondNumber = parseInt(prompt('Введіть число ще раз', ));
    if (userSecondNumber) {
        alert('Congrats!');
    } else {
        alert('Тільки число!');
    }
} while (!userSecondNumber);

let evenOdd = confirm('Ви хочете пропускати парні числа?');
if (evenOdd % 2 === 0) {
    alert('Йдемо далі');
} else {
    alert('try again');
}