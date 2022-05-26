let N;
let M;


while (!(N % 1 === 0 && Number.isInteger(parseInt(N)))) {
    N = +prompt('Enter the first number: ', '');
    alert('Keep using INTEGERS only');
}
while (!(M % 1 === 0 && Number.isInteger(parseInt(M)) && M > N)) {
    M = +prompt('Enter the second number: ', '');
    if (M > N) {
        alert('Next step, count even/odd numbers')
    } else {
        alert('Second number must be greater than first and not equal!')
    }
}

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