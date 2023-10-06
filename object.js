const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  name: {
    first: "Bobb",
    last: "Smith",
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

function logProperty(propertyName) {
  console.log(person[propertyName]);
}
logProperty("name");

person.age = 45;
console.log(person.age);

person["name"]["last"] = "Cratchit";
console.log(person.name);

person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
console.log(person.eyes);

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

console.log(person.height);

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}
console.log(createPerson("Borhan"));
