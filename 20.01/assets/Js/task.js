//1) Leap year checker
let Year = 2024;

if (Year%400==0) {
    console.log("It's a Leapyear");

}
else if(Year%100==0 && Year%400!=0)
{
    console.log("It's not a leap year");
    
}
else if(Year%4==0 && Year%100!=0){

    console.log("It's a Leapyear");

}
else {
    console.log("Not a Leapyear");
}

//2)Calculate simple interest

let P = 40000;
let T = 3;
if(P<10000){
    S = 100*P*0.1*T;
    
}
else if(P>10000 && P<30000){
    S = 100*P*0.07*T;
    
}
else if(P>30000 && P<50000){
   
    S = 100*P*0.05*T;
    
}
else{
    
    S = 100*P*0.03*T;
    
}
console.log(`Simple Interest => ${S}`);



//3)odd or even with range checking

let a = 101;
if(a<1 || a>100){
    console.log("Outside a specific range");
    
}
else if (a % 2 == 0) {
    console.log("It is an even number");

}
else{
    console.log("It is an odd number");

}


//4)Number category

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

//5)Discount calculator

let total = 3000;
if (total > 5000) {
    Discount = total*20/100
    console.log(`You got 20% discount => ${Discount} Rs`);

}
else if (total>=2000 && total<= 5000) {
    Discount = total*10/100
    console.log(`You got 10% discount => ${Discount} Rs`);
}
else{
    console.log("No dicount");


}
//6)Odd or Even
let num = 7;

 if (num % 2 == 0) {
    console.log("It is an even number");

}
else{
    console.log("It is an odd number");

}


//7)User Authentication System

let user = "editor"
if(user == "admin"){
    console.log("Can have full access");
    
}
else if(user == "editor"){
    console.log("have access only for editing");
    
}
else if(user == "viewer"){
    console.log("have access only to view");
    
}
else{
    console.log("access denied");
    
}
//8)Product stock management

let totalstock =80000;

if(totalstock>100000){
    console.log("Restocked");
    
}
else if(totalstock<100000 && totalstock>50000){
    console.log("Maximum Stock");
    
}
else if(totalstock<50000 && totalstock>5000){
    console.log("Minimum Stock");
    
}
else{
    console.log("Out of Stock");
    
}
//9)Electricity Bill
 let Units = 320;
 if(Units<=100){
    bill = (Units*1.5)
 }
 else if(Units<=300){
    bill = (100*1.5)+((Units-100)*2.5)
 }
 else{
    bill = ((100*1.5)+(200*2.5)+((Units-300)*3.5))
 }
 console.log(`Electricity charges => ${bill}`);
 
//10)Divisibility

let z = 18;
if(z%2==0 && z%3==0){
    console.log("The number is divisible by both 2 and 3");
    
}else if(z%2==0){
    console.log("The number is divisible by 2");
    
}
else if(z%3==0){
    console.log("The number is divisible by 3");
    
}
else{
    console.log();
    
}

//11)Tax Calculation
let salary = 800000;

if(salary>900000)
{
    Tax = (45000+(salary*15/100))
}else if(salary<900000 && salary>600000)
{
    Tax = (15000+(600000*10/100))
}
else if(salary<600000 && salary>300000){
    Tax = (300000*5/100)
}
else if(salary<300000){
    
}
console.log(`Tax to be paid ${Tax}`);



//12)simple calculator

let x = 5;
let y = 10;
let option= "multiply"

if(option == "Add"){
    operation= x+y;
}else if(option == "Sub"){
    operation= x-y;
}else if(option == "multiply"){
    operation= x*y;
}else{
    operation= x/y;
}

console.log(`Answer => ${operation}`);


//13)Number comparison

if(x==y){
    console.log("They are equal");
    
}else if(x>y){
    console.log("X is greater than Y");
    
}
else{
    console.log("Y is greater than X");
    
}

//14)Traffic Light Simulator

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

//15)Shape Identifier

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
