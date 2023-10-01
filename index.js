/*
Math 1
 You will create four numeric values, add two together, subtract one from another, then multiply the results. Finally, we need to write a check that proves that this value is an even number.
*/

/* let finalResult;
let evenOddResult;

const num1 = 5;
const num2 = 7;
const num3 = 3;
const num4 = 3;

const sum = num1 + num2;
const sub = sum - num3;
finalResult = sub * num4;
evenOddResult = finalResult % 2 === 0 ? "even number" : "odd number";
console.log(evenOddResult); */

/* 
Math 2
you are provided with two calculations with the results stored in the variables result and result2. You need to take the calculations, multiply them, and format the result to two decimal places.
*/

/* let result = 7 + 13 / 9 + 7;
let result2 = (100 / 2) * 6;
let finalResult2 = result.toFixed(2);
let finalNumber = Number(finalResult2);
console.log(finalResult2);
console.log(typeof finalNumber); */

/* 
Math 3
There are three groups, each consisting of a statement and two variables. For each one, write a test that proves or disproves the statement made. Store the results of those tests in variables called weightComparison, heightComparison, and pwdMatch, respectively.
*/

/* // Statement 1: The elephant weighs less than the mouse
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

console.log(pwdTest); */

/*-------------
JavaScript String Methods --------------------------------
---------------*/
const string = "Hello Developer World";
/*-------------
string er index number define kore dile oi string er index number er uopr base kore certain character ti return kore.
---------------*/
console.log(string.charAt(6));

/*-------------
index er upor base kore character er unicode return kore & jodi kokono out of length er value cawa hoi tokon NaN return kore.
---------------*/
console.log(string.charCodeAt(2));

/*-------------
string er index number define kore dile oi string er index number er uopr base kore certain character ti return kore & jodi kokono out of length er value cawa hoi tokon undefined return kore.
---------------*/
console.log(string.codePointAt(20));

/*-------------
akti string er sate ar akti string or akti variable er sate ar akti variable concat kora.
---------------*/
console.log("concat", string.concat(" This is my day"));

/*-------------
string er last word or character check kore Boolean value return korbe.
---------------*/
console.log("endsWith", string.endsWith("D"));

/*-------------
variable a particular character ti ace kina check kore Boolean value return korbe.
---------------*/
console.log("includes", string.includes("D"));

/*-------------
particular character er index number return kore.
---------------*/
console.log("indexOf", string.indexOf("r"));

/*-------------
string er last index number return kore.
---------------*/
console.log("lastIndexOf", string.lastIndexOf("r"));

/*-------------
string er length return kore.
---------------*/
console.log(string.length);

/*-------------
localCompare method 3vabe result return kore 
1. akti string er sate onno string match hole 0 return korbe .
2. order er age sorting hoye gele 1 return korbe
3. order er pore sorting hoye gele -1 return korbe
---------------*/
const test = "Hi Don";
const test2 = "Hi on";

console.log("localCompare sorted", test2.localeCompare(test));

/*-------------
string a certain word or character ace kina check kore 
---------------*/
console.log("match", string.match(/hello/gi));

/*-------------
any unicode convert to character.
---------------*/
const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
console.log("normalize", name1.normalize());

/*-------------
certain length er upor base kore space niye nibe  
---------------*/
console.log("padEnd", string.padEnd(30, " foo"));

/*-------------
certain length er upor base kore space nibe
---------------*/
console.log("padStart", string.padStart(30, " foo"));

/*-------------
kono value koibar repeat korbe seta 
---------------*/
console.log("repeat", string.repeat(3));

/*-------------
replace methods a 2ta syntax use hoi 1ti holo keke replace korbe then 2nd ti holo ki replace hobe
---------------*/
console.log("replace", string.replace("Hello", "Hi"));

/*-------------
akti string a kon word koto index a ace seti return kore. 
---------------*/
console.log("search", string.search());

/*-------------
akti string er koto index teke koto index porjontto show korbe 
---------------*/
console.log("slice", string.slice(3, 6));

/*-------------
akti string ke space or character er upor base kore oi string ke akti array te convert kore.
---------------*/
console.log("split", string.split(" "));

/*-------------
string values ki diye start hoyece seti check kore true or false return kore. it's case-sensitive. 
---------------*/
console.log("startWith", string.startsWith("h"));

/*-------------
any string ke uppercase a convert kore
---------------*/
console.log("toUpperCase", string.toUpperCase());

/*-------------
any string ke lowercase a convert kore
---------------*/
console.log("toLowerCase", string.toLowerCase());

/*-------------
je kono value ke string a convert kore without object 
---------------*/
const num = [3, 5];
console.log("toString", num.toString());

/*-------------
this method any string values removes whitespace from both ends of this string
---------------*/
const trim = "    string     ";
console.log(trim.trim());
