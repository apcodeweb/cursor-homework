let N;
let M;
do {
    N = prompt('Enter the first number: ', '');
    if (N % 1 === 0 && Number.isInteger(parseInt(N))) {
        alert('nice,now go to the second number');
    } else {
        alert('try again(INTEGERS only)');
    }
}

while (!(N % 1 === 0 && Number.isInteger(parseInt(N)))) {
    alert('keep using INTEGERS only');
}

do {
    M = prompt('Enter the second number: ', '');
    if (M % 1 === 0 && Number.isInteger(parseInt(N))) {
        alert('next step will count even/odds numbers');
    } else {
        alert('try again(INTEGERS only)');
    }
} while (!(M % 1 === 0 && Number.isInteger(parseInt(M)))) {

}

let skipEvenOdd = confirm('Skip even numbers?');
N = +N;
M = +M;

let sum = 0;

for (let i = N; i <= M; i++) {
    if (skipEvenOdd && i % 2 === 0) {
        continue;
    } else {
        sum += i;
        console.log(sum);
    }
}
document.writeln(`result: ${sum}`);