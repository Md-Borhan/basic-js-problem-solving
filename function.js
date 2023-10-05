// In JavaScript there are many ways declare a function below the example

/* 
1. Function Declaration
Function declarations and function expressions have different behavior with regard to hoisting, so it's important to understand the difference and choose the appropriate method based on your needs.
*/

function funcDeclaration() {
  console.log("Hello Function declaration");
}
funcDeclaration();

/* 
2. Function Expression
Function expressions are often used when you want to assign a function to a variable, pass it as an argument to another function, or define functions within a smaller scope, like within another function or a block of code.
*/

const funcExpression = function () {
  console.log("Hello Function expression");
};
funcExpression();

/* 
3. Function Assign with parameters.
When a function is assigned a parameter, it automatically receives the value passed as an argument when the function is called. 
*/

function withParameters(fName, lName) {
  console.log(`Full Name: ${fName} ${lName}`);
}
withParameters("MD.", "Borhan");

/* 
4. Arrow Function 
Arrow functions, a modern addition to JavaScript in ES6, offer a sleek and succinct way to declare functions. They are favored for their brevity, making code more concise and readable. With arrow functions, you can write functions quickly and elegantly, especially when dealing with simple one-liners or inline functions.
*/

// without parentheses
const arrowFunction = (num1, num2) => console.log(num1 + num2);
arrowFunction(5, 15);

/* 
5. Function Constructor
You want write function construct you have must be write to function f is capital letter and first quotation is parameter the second quotation is function body.
*/

const funcConstructor = Function(
  "passion",
  "console.log(`Your passion is ${passion}`)"
);
funcConstructor("Web Developer");

/* 
6. Immediately Invoked Function Expression (IIFE)
An IIFE is a function expression that is executed immediately after it's defined. It's often used to create a private scope for variables to avoid polluting the global scope.
*/

(function (gender) {
  console.log(`Your gender is ${gender}`);
})("Male");

/* 
7. function declaration in object
*/
const myObj = {
  firstName: "MD",
  lastName: "Borhan",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(myObj.fullName());
