// For...of loop
const num = [5, 3, 7, 2, 1];

for (const cat of num) {
  console.log("for...of loop", cat);
}

// For loop
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let i = 0; i < numbers.length; i++) {
  console.log(i++);
}

function convertCase(array) {
  return array.map((item, index) => item.toString().toUpperCase() + index);
}

const array = ["a", "b", "c", "d", "e"];
console.log(convertCase(array));

// While loop
const string = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let i = 0;
let alphabet = "";

while (i < 5) {
  alphabet += string[i];
  i++;
}
console.log(alphabet);

// Do while loop
let count = 1;

do {
  console.log(`count: ${count}`);
  count++;
} while (count <= 10);
