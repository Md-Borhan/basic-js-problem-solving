const array = ["a", "b", "c", "d", "e"];
const array2 = ["f", "g", "h,", "i"];

/*======= concat =======*/
console.log(array.concat(array2));

/*======= push =======*/
array.push(2);
console.log(array);

/*======= pop =======*/
array.pop();
console.log(array);

/*======= shift =======*/
array.shift();
console.log(array);

/*======= unshift =======*/
array.unshift(5, 5);
console.log(array);

/*======= push =======*/
console.log(array.filter((findNum) => findNum === 5));

/*======= find =======*/
console.log(array.find((findNum) => findNum === 5));

/*======= includes =======*/
console.log(array.includes(5));

/*======= indexOf =======*/
console.log(array.indexOf("c"));

/*======= join =======*/
console.log(array.join(" - "));

/*======= slice =======*/
console.log(array.slice(1, 3));

/*======= splice =======*/
// console.log("splice", array2.splice(","));

/*======= length =======*/
console.log(array2.length);

/*======= map =======*/
console.log(array2.reverse());
