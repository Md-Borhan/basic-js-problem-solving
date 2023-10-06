// 1. Function Declaration

function funcDeclaration() {
  console.log("Hello Function declaration");
}
funcDeclaration();

// 2. Function Expression

const funcExpression = function () {
  console.log("Hello Function expression");
};
funcExpression();

// 3. Function Assign with parameters.

function withParameters(fName, lName) {
  console.log(`Full Name: ${fName} ${lName}`);
}
withParameters("MD.", "Borhan");

// 4. Arrow Function

const arrowFunction = (num1, num2) => console.log(num1 + num2);
arrowFunction(5, 15);

// 5. Function Constructor

const funcConstructor = Function(
  "passion",
  "console.log(`Your passion is ${passion}`)"
);
funcConstructor("Web Developer");

// 6. Immediately Invoked Function Expression (IIFE)

(function (gender) {
  console.log(`Your gender is ${gender}`);
})("Male");

// 7. function declaration in object

const myObj = {
  firstName: "MD",
  lastName: "Borhan",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(myObj.fullName());
