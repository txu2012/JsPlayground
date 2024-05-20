// String to number
let amount = "100";
console.log(amount, typeof amount);

//amount = parseInt(amount);
//amount = +amount; // <- + can be used to convert to number in newer ways
//amount = Number(amount);

console.log(amount, typeof amount);

// Number to string
let x = 1;
console.log(x, typeof x);

//x = x.toString();
x = String(x);

console.log(x, typeof x);

// String to float/decimal
let y = "99.5";
console.log(y, typeof y);

y = parseFloat(y);
console.log(y, typeof y);

// number to boolean
// >= 1 -> true, 0 -> false
let z = 1;
console.log(z, typeof z);

z = Boolean(z);
console.log(z, typeof z);

// Number cant be parsed
let a = "hello";
a = parseInt(a); // NaN
console.log(a, typeof a);
console.log(Math.sqrt(-1));
console.log(undefined + undefined);
console.log("foo" / 3);