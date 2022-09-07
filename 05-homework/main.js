const getRandomNumber = (length, min, max) => {
    const randomArray = [];
    for (i = 0; i < length; i++) {
        randomArray.push([Math.floor(Math.random() * (max - min) + min)]);
    }
    return randomArray
}
console.log(getRandomNumber(15, 1, 100));

const getAverage = (...numbers) => {
    let newArr = numbers.filter(function(el) {
        return Number.isInteger(el);
    });
    let average = newArr.reduce((a, b) => (a + b));
    return average / newArr.length;
}
console.log(getAverage(1, 4, 6, 7, 8, 1.5, 9, 0, 19));

const filterEvenNumbers = (...numbers) => {
    return numbers.filter(el => el % 2 !== 0);
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7));

const countPositiveNumbers = (...numbers) => {
    let positiveNumb = numbers.filter(function(el) {
        return el > 0;
    });
    let summary = positiveNumb.reduce((a, b) => (a + b));
    return summary;
}
console.log(countPositiveNumbers(-1, 0, -24, 1, 2, 3, 4, 5, 6));

const getDividedByFive = (...numbers) => {
    return numbers.filter(el => el % 5 === 0 && el !== 0);
}
console.log(getDividedByFive(-1, -5, 0, -24, 1, 5, 10, 20))

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