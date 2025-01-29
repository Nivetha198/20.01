
//1)Write a Function to Add Two Numbers

function add(a, b) {
    return a + b;
}
let sum = add(5, 6);
console.log(`Sum is ${sum}`)


//2)Write a Function to Check Even or Odd

function checkOddOrEven(n) {
    if (n & 1 == 1) {
        return "Number is odd";
    }
    return "Number is even";
}

console.log(checkOddOrEven(11));


//3)Write a Function to Find the Maximum of Two Number

function Max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(Max(9, 5));


//4)Write a Function to Find the Minimum of Two Number

function Min(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

console.log(Min(9, 5));


//5)Write a Function to Concatenate Strings

function greet(greeting, name) {
    return greeting + name;


}
console.log(greet("Hello", "Nivetha"));


//6) Write a Function to Calculate Factorial

function factorial(num) {
    let z = 1;
    for (let i = 1; i <= num; i++) {
        z *= i;
    }
    return z;
}
console.log(factorial(4));


//7)Write a Function to Reverse a String



function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;

}


console.log(reverseString('Nivetha'));



//8)Write a Function to Find the Length of an Array
function arrayLength(arr) {
    let count = 0;
    for (const element of arr) {
        count++;
    }

    return count;
}
let number = [12, 13, 14, 25]
console.log("Length of array:", arrayLength(number));



//9 )Function to Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
result = celsiusToFahrenheit(30);
console.log(result);


//10)Write a Function to Filter Even Numbers from an Array

const numbers = [7, 10, 15, 8, 13, 18, 6];
const evens = [];
for (const num of numbers) {
    if (num % 2 === 0) {
        evens.push(num);
    }
}
console.log(evens);