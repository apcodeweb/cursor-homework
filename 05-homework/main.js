const getRandomNumber = (length, min, max) => {
    const randomArray = [];
    for (i = 0; i < length; i++) {
        randomArray.push([Math.floor(Math.random() * (max - min) + min)]);
    }
    return randomArray
}
console.log(getRandomNumber(15, 1, 100));
document.writeln(`GetRandomNumber(15, 1, 100) = ${getRandomNumber(15,1,10)}<br><br>`)





const getAverage = (...numbers) => {
    let newArr = numbers.filter((el) => {
        return Number.isInteger(el);
    });
    let average = newArr.reduce((a, b) => (a + b));
    return average / newArr.length;
}
console.log(getAverage(1, 4, 6, 7, 8, 1.5, 9, 0, 19));
document.writeln(`Average number of this set (1, 4, 6, 7, 8, 1.5, 9, 0, 19) = ${getAverage(1, 4, 6, 7, 8, 1.5, 9, 0, 19)}<br><br>`)






const filterEvenNumbers = (...numbers) => {
    return numbers.filter(el => el % 2 !== 0);
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7));
document.writeln(`Skip even numbers in this set of numbers(1,2,3,4,5,6,7) = ${filterEvenNumbers(1, 2, 3, 4, 5, 6,7)} <br><br>`)





const countPositiveNumbers = (...numbers) => {
    let positiveNumb = numbers.filter((el) => {
        return el > 0;
    });
    let summary = positiveNumb.length
    return summary;
}
console.log(countPositiveNumbers(-1, 0, -24, 2, 3, 4, 5, 6));
document.writeln(`Sum of all numbers which > 0 (-1, 0, -24,  2, 3, 4, 5, 6) =${countPositiveNumbers(-1, 0, -24,  2, 3, 4, 5, 6)}<br> <br>`)






const getDividedByFive = (...numbers) => {
    return numbers.filter(el => el % 5 === 0 && el !== 0);
}
console.log(getDividedByFive(-1, -5, 0, -24, 1, 5, 10, 20))
document.writeln(`Get Divided By Five (-1, -5, 0, -24) =  ${getDividedByFive(-1, -5, 0, -24)}<br><br>`)







const replaceBadWords = (string) => {
    const badWords = ["fuck", "shit"];
    const newArr = string.split(' ').map(function(el) {
        for (let i = 0; i < badWords.length; i++) {
            if (el.includes(badWords[i])) {
                return el.replaceAll(badWords[i], '*'.repeat(badWords[i].length));
            }
        }
        return el;
    });
    return newArr.join(' ');
}
console.log(replaceBadWords('fucking shit'));
document.writeln(`Bad words marked by * = ${replaceBadWords('fucking shit')}`);