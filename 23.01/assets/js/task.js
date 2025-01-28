//1)Print the elements of an array

let veg = [`onion`,"Brinjal","carrot","pumpkin"]

console.log(veg);

//2)Reverse the elements of an array

for(let i=veg.length-1; i>=0; i--){
    console.log(veg[i]);
    
}

//3)Find the maximum number in an array

let val=[5,10,100,15,20,101,25,40];
let temp=val[0];
console.log(val);
for(i=0;i<val.length;i++){
    if(val[i]>temp){
        temp=val[i];
    }
}
console.log(temp);
//4)Find the minimum number in an array
let tem=val[0];
console.log(val);
for(i=0;i<val.length;i++){
    if(val[i]<tem){
        temp=val[i];
    }
}
console.log(tem);

//5)Count digits in a number

let num=[2,3,7,9,1,11,15,20,25]
console.log(num);
console.log(`Number of digits=>${num.length}`);

//6)Sum of digits in anumber

console.log(num);
let a =0;
for(i=0;i<num.length;i++)
{
    let sum = num[i];
    a+=num[i];
}
console.log(`Sum of digits => ${a}`);
//7)Print all elements of an object

let obj={
    Name:"Nivetha",
    Age:29,
    Place:"Tuticorin",

};
console.log(Object.entries(obj));

//8)Fibonacci series

const n = 7;

let fibno =[0,1];

for(i=2;i<=n;i++){
    fibno[i]=fibno[i-1]+fibno[i-2];
}

console.log(fibno);
