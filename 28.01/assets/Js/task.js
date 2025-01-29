//FUNCTIONS

//1)Write a Function to Add Two Numbers

function add(a, b) {
    return a + b;

}
let num1 = 10;
let num2 = 20;
let sum = add(num1, num2);
console.log(`Sum => ${sum}`);




//3 ) Arrow Function to Find Square of a Number
let z = 5;
const square = (num) => z * z;

console.log(square(z));


//4)Function to Find the Largest of Three Numbers
function max(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
const largest = max(15, 11, 12);
console.log(`Largest => ${largest}`);





//6)Function to Calculate the Area of a Circle
function calculateCircleArea(radius) {

    var area = 3.14 * radius * radius;
    return area;
}
Area = calculateCircleArea(2);
console.log(Area);

//7 )Function to Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
result = celsiusToFahrenheit(28);
console.log(result);


//2)Function with Default Parameters

function greet(name="Guest")
{
    return `Hello, ${name}!`
    
}
console.log(greet());
console.log(greet("Nivetha"));


// 5) Function Using Callback

function performOperation(a, b, myCallback) {
    let sum = a + b;
    myCallback(sum);
}

function myCalculator(sum){
    console.log(`The sum is=> ${sum}`);
    
}
performOperation(5,3,myCalculator);

