// Ways to declare a variable
// var, let, const

let firstName = "Inuwan";
let lastName = "Touhou";

console.log(firstName, lastName);

let age = 30;

console.log(age);

// reassigning variables

age = 50;
console.log(age);

let score; // Can declare without value
score = 1;
console.log(score);

if (true) {
    score = score + 1;
}
console.log(score);

const x = 100;
// Cannot be reassigned
// x = 200 <- error
// const y; <- error

const arr = [1,2,3,4];
//arr = [1,2,3,4,5] <- error
arr.push(5);

console.log(arr);

const person = {
    name: "John"
};
console.log(person);
person.name = "Jane";
console.log(person);

person.email = "temp@gmail";
console.log(person);

// Declaring multiple at once
let a, b, c;
a = 10;
b = 20;
c = 30;

const d = 10, e = 20, f = 30;

console.log(d);