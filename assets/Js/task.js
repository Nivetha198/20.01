// Leap year checker
let Year = 2100;

if ((Year % 4 === 0 && Year % 100 !== 0) || (Year % 400 === 0)) {
    console.log("It is Leapyear");

}

else {
    console.log("Not a Leapyear");
}

//odd or even

let a = 11;
if (a % 2 === 0) {
    console.log("It is an even number");

}
else {
    console.log("It is an odd number");

}

//Number category

let b = 99;

if (b > 0 && b > 100) {
    console.log("b is positive and greaterthan 100");

}
else if (b > 0 && b <= 100) {
    console.log("b is Positive and less than or equal to 100");

}
else if (b = 0) {
    console.log("Zero");

}
else {
    console.log("Negative");

}

//Discount calculator

let total = 1800;
if (total > 5000) {
    console.log("You got 20% discount");

}
else if (total>=2000 && total<= 5000) {
    console.log("You got 10% discount");

}
else{
    console.log("No dicount");


}

//simple calculator

let x = 5;
let y = 10;

console.log( x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);

//Number comparison

console.log( x===y );
console.log( x<y );

//Traffic Light Simulator

let input = "Yellow";

if(input==="Red"){
    console.log("Stop");
    
}
else if(input==="Yellow"){
    console.log("Get Ready");
    
}
else if(input==="Green"){
    console.log("Go");
    
}
else{
    console.log("invalid");
    
}

//Shape Identifier

let side = 5;

if(side === 3){
    console.log("Triangle");
    
}
else if(side === 4){
    console.log("Quadrilateral");
    
}
else if(side === 5){
    console.log("Pentagon");
    
}
else{
    console.log("Unknown shape");
    
}
