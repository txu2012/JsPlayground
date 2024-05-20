// Apply operators to different types
let x;

x = 5 + '5'; // Concatenated
x = 5 + Number('5');

x = 6 - "5"; // coerced to a number
x = 5 * '5'; // coerced to a number
x = 5 / '5'; // coerced to a number

x = 5 + null; // Coerced to a 0
x = Number(null); // 0

x = Number(true); // 1
x = Number(false); // 0
x = 5 + true; // 5 + 1
x = 5 + false; // 5 + 0

x = 5 + undefined; // NaN -> anything to undefined will be NaN

console.log(x, typeof x);