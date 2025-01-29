//for loops


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

//while loops
console.log("while loops");

//1)Print numbers from 1 to 10

let p = 1;
while (p <= 10) {
    console.log(p);
    p++;

}

//2)Print even numbers from 1 to 20

let q = 1;
while (q <= 20) {
    if (q % 2 == 0) {
        console.log(q);

    }
    q++;
}
//3)Print odd numbers from 1 to 20

let odd = 1;
while (odd <= 20) {
    if (odd % 2 != 0) {
        console.log(odd);

    }
    odd++;
}

//4) Sum of numbers from 1 to 10
let nums = 0;
let r = 1;
while (r <= 10) {
    nums = nums + r;
    r = r + 1;
    console.log(nums);
}
console.log(`The sum of numbers from 1 to 10 => ${nums}`);

//5) Factorial of a number (e.g., 5!)
let g = 5;
let h = 1;
let j=0;
while(j<5){
    h = h * (g-j);
    j++;
}
console.log(g + '!=' + h);

//6) Multiplication table of 5

let k=5;
while(k<=50){
    if(k%5 == 0){
        console.log(k);
        
    }
    k++;
}

//7) Print the first 10 Fibonacci numbers

let u = 10;
let fst = 0;
let scnd = 1;
let v=0;
while(v<=u){
    let answer = fst + scnd;
    console.log(answer);

    fst = scnd;
    scnd = answer;
    v++;
}

//8)Print numbers from 10 to 1
let rev = 10;
while (rev >= 1) {
    console.log(rev);
    rev--;

}

//9)Check if a number is prime
let nu = 17;
let value = nu > 1 && !(nu % 2 === 0 && nu !== 2);
let m=3;
while(m * m <= nu && value){
    if (nu % i == 0) {
        value = false;

    }
    m+=2;
}
console.log(value ? `${nu} is a prime number` : `${nu} is not a prime number`);

//10)Print numbers from 1 to 100, but skip multiples of 3

let s=1;
while(s<=100){
    if (s % 3 != 0) {
        console.log(s);

    }
    s++;
}
