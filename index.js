/*
Math 1
 You will create four numeric values, add two together, subtract one from another, then multiply the results. Finally, we need to write a check that proves that this value is an even number.
*/

let finalResult;
let evenOddResult;

const num1 = 5;
const num2 = 7;
const num3 = 3;
const num4 = 3;

const sum = num1 + num2;
const sub = sum - num3;
finalResult = sub * num4;
evenOddResult = finalResult % 2 === 0 ? "even number" : "odd number";
console.log(evenOddResult);

/* 
Math 2
you are provided with two calculations with the results stored in the variables result and result2. You need to take the calculations, multiply them, and format the result to two decimal places.
*/

let result = 7 + 13 / 9 + 7;
let result2 = (100 / 2) * 6;
let finalResult2 = result.toFixed(2);
let finalNumber = Number(finalResult2);
console.log(finalResult2);
console.log(typeof finalNumber);

/* 
Math 3
There are three groups, each consisting of a statement and two variables. For each one, write a test that proves or disproves the statement made. Store the results of those tests in variables called weightComparison, heightComparison, and pwdMatch, respectively.
*/

// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

// Statement 3: The two passwords match
const pwd1 = "stromboli";
const pwd2 = "stROmBoLi";

let weightComparison = eleWeight < mouseWeight;
let heightComparison = ostrichHeight > duckHeight;
let pwdMatch = pwd1 === pwd2;

const weightTest = weightComparison
  ? "True — elephants weigh less than mice!?"
  : "False — of course an elephant is heavier than a mouse!";

const heightTest = heightComparison
  ? "True — an ostrich is indeed taller than a duck!"
  : "False — apparently a duck is taller than an ostrich!?";

const pwdTest = pwdMatch
  ? "True — the passwords match."
  : "False — the passwords do not match; please check them";

console.log(pwdTest);
