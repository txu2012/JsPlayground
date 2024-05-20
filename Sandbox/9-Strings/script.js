let x;

const name = "Jane";
const age = 30;

// To use ${} similarly to c#, need to use `` and not ''/""
x = `Hello my name is ${name} and I am ${age} years old.`;

console.log(x);

let y = new String("Hello World");
console.log(y.split());
console.log(y.length);
console.log(y.replace("World", "Momiji"));
console.log(y[6]);

x = y.__proto__;
console.log(x);
console.log(y.substring(3, 7));
console.log(y.slice(-8))