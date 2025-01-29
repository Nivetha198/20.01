//1)add num and string 
const sum = 19 + "hello"

console.log(sum);
console.log(typeof sum);
//2)
const string = ""
const num = 40
const boolean = true

console.log(!string)
//3)
console.log(boolean + string)
console.log(40 + true)

//4)number to boolean conversion
const number = 30

const Convert = Boolean(number)

console.log(Convert)
console.log(typeof Convert)

//5)
let x = (10 == '10');
let y = (true == 1);
let z = (true == 'true');

console.log(x);
console.log(y);
console.log(z);

//6)
const a = "5";
const b = a+10
const c= Number(a)+10;
console.log(b); 
console.log(c);
//7)
console.log(5 + null);
console.log("5" + null);

//8)
console.log("5"+ 2);
console.log("5" - 2);
console.log("5" * 2);

//9)

if ("Hello") {
    console.log("Truthy"); 
}
  if ("") {
    console.log("Falsy"); 
  }
//10)

var ageAsString = "29";
var age = Number(ageAsString);

var ageNextYear = age + 1;
console.log(ageNextYear); 

