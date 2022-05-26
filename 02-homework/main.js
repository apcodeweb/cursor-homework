let N;
let M;


while (!(N % 1 === 0 && Number.isInteger(parseInt(N)))) {
    N = prompt('Enter the first number: ', '');
    alert('Keep using INTEGERS only');
}

do {
    M = prompt('Enter the second number: ', '');

} while (!(M % 1 === 0 && Number.isInteger(parseInt(M)) && M > N)) {
    alert('Now we are going to count even/odd numbers')
}
N = +N;
M = +M;
const skipEvenOdd = confirm('Skip even numbers?');


let sum = 0;

for (let i = N; i <= M; i++) {
    if (skipEvenOdd && i % 2 === 0) {
        continue;
    } else {
        sum += i;
        console.log(sum);
    }
}
document.writeln(`Result: ${sum}`);