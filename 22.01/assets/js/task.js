//1)Print numbers from 1 to 10

for (i = 1; i <= 10; i++) {
    console.log(i);
}
//2)Print even numbers from 1 to 20
for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }

}
//3)Print odd numbers from 1 to 20
for (i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }

}

//4) Sum of numbers from 1 to 10
let num = 0;
for (i = 1; i <= 10; i++) {
    num += i;
    console.log(num);
}
console.log(`The sum of numbers from 1 to 10 => ${num}`);

//5) Factorial of a number (e.g., 5!)
let x = 5;
let n = 1;
for (i = 0; i < 5; i++) {
    n = n * (x - i)
}
console.log(x + '!=' + n);

//6) Multiplication table of 5

for (i = 5; i <= 50; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }

}

//7) Print the first 10 Fibonacci numbers

let c = 10;
let first = 0;
let second = 1;

for (let i = 0; i <= c; i++) {
    let answer = first + second;
    console.log(answer);

    first = second;
    second = answer;

}

//8)Print numbers from 10 to 1

for (i = 10; i >= 1; i--) {
    console.log(i);
}

//9)Check if a number is prime
let f = 10;
let val = f > 1 && !(f % 2 === 0 && n !== 2)
for (let i = 3; i * i <= f && val; i += 2) {
    if (f % i == 0) {
        val = false;

    }
}

console.log(val ? `${f} is a prime number` : `${f} is not a prime number`);



//10)Print numbers from 1 to 100, but skip multiples of 3

for (i = 1; i <= 100; i++) {
    if (i % 3 != 0) {
        console.log(i);

    }

}

