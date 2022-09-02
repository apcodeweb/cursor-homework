const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми i структури даних"];

const marks = [4, 5, 5, 3, 4, 5];
//pairs
const getPairStudents = (students) => {
    const girls = [];
    const boys = [];
    for (i = 0; i < students.length; i++) {
        if (students[i].slice(-1) === "а") {
            girls.push(students[i]);
        } else {
            boys.push(students[i]);
        }
    }

    const resultPairs = [];
    for (i = 0; i < boys.length; i++) {
        resultPairs.push([girls[i], boys[i]]);
    }
    return resultPairs;

}
const resultPairs = getPairStudents(students);
console.log(getPairStudents(students));





//themes
const getThemesInPairs = (themes) => {
    const pairThemes = [];
    for (i = 0; i < resultPairs.length; i++) {
        pairThemes.push([resultPairs[i] + " - " + themes[i]]);
    }
    return pairThemes;
}
const pairThemes = getThemesInPairs(themes);

console.log(pairThemes);



//marks
const getMarksForStudents = (marks) => {
    const studentMarks = [];
    for (i = 0; i < marks.length; i++) {
        studentMarks.push([students[i] + " - " + marks[i]]);
    }
    return studentMarks;
}
const studentMarks = getMarksForStudents(marks);
console.log(studentMarks);

//random marks
const getRandomMarks = (pairThemes) => {
    const randomFinish = [];
    const getRandom = (max, min) => Math.floor(Math.random() * (max - min) + min);
    for (i = 0; i < pairThemes.length; i++) {
        randomFinish.push([pairThemes[i] + " - " + getRandom(5, 1)]);
    }
    return randomFinish;
}
const randomFinish = getRandomMarks(pairThemes);
console.log(randomFinish);