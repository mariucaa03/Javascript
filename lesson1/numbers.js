// const a = Number(prompt("Enter fisrt number:"))
// const b = Number(prompt("Enter second number:"))

let a = 2;
let b = 4;

// Arithmetic operators

const c = a + b;
console.log("------------------ a=2 b=4 --------------");
console.log("c = a + b");
console.log("c =", c);
console.log("------------------ a=2 b=4 --------------");


const sum = a + b;

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("------------------ age ------------------ ");


let age = 25;
age = age + 1; 
/**
 * another notation for age = age + 1 :
 * age +=1,
 * age++,
 * ++age
 */


console.log("age", age); 
console.log("------------------ a=2 b=4 --------------");

 
// Operatori de comparare

console.log("a > b", a > b);
console.log("a < b", a < b);
console.log("------------------ a=4 b=4 --------------");


a = 4;
b = 4;

console.log("a >= b", a >= b);
console.log("a <= b", a <= b);

console.log("a == b", a == b);
console.log("a === b", a === b);

console.log("------------------ a is a string equal with 2 b=2");


a = "2";
b = 2;


console.log("a != b", a != b);
console.log("a !== b", a !== b);


// Parsare

const value ="123.1"

console.log("------------------ Number--------------");

console.log("parseInt", Number(value));
console.log("parseInt", Number.parseInt(value));
console.log("parseInt", Number.parseFloat(value));

// Math

console.log("------------------ Math --------------");

const value2 = "123.5"
console.log("round", Math.round(value2));
console.log("floor", Math.floor(value2));
console.log("ceil", Math.ceil(value2));


console.log("max", Math.max(1, 5, 2, 10, 4));
console.log("min", Math.min(1, 5, 2, 10, 4));

console.log("pow", Math.pow(2, 4));

console.log("random", Math.random());

// Random exercise

const min = 22;
const max = 31;

const myRandom = Math.random() * (max - min) + min;

console.log("myRandom", myRandom);

// Operatori logici