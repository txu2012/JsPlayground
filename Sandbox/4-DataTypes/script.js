// Reference and primitive types

//Primitive: string, number, boolean, null(intentional empty), undefined (not yet assigned), symbol, bigint (int64?)
//Reference/object: object literals, arrays, functions (non primitive)

// Static typing  (C, C++, Java)
// Dynamic Typing (Javascript)

// Typescript -> also allows static typing

// Primitive Type
const firstName = "John"; // string
const age = 30; // Number
const temp = 99.9; // Number
const hasNum = true // Boolean
const aptNum = null; // null

let x; // undefined
const score = undefined; // undefined

const id = Symbol("id");// symbol

const n = 9213209321432409n;// bigint

// reference types
const numbers = [1, 2, 3, 4, 5] // arrays
const person = {
    name: "John"
}
function sayHello() {
    console.log("Hello")
}

const output = sayHello;
console.log(output, typeof output);

console.log(person);

const newPerson = person;
newPerson.name = "Jonathan";

console.log(newPerson); // Jonathan
console.log(person); // Jonathan 