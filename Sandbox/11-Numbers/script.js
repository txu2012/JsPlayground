let x;

const num = new Number(5);
x = num.toString();
x = num.toString().length;
x = num.toFixed(2); // Decimal points

x = num.toPrecision(3); // Digits

x = num.toExponential(2); // 5.00e+0

x = num.toLocaleString('en-US');

x = num.valueOf();

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(5, typeof num);
console.log(x);