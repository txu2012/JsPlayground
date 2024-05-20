// 1. Arithmetic -> +, -, /, *, %
// 2. Concatenation -> + for strings

let x = "Hello" + "World"
console.log(x);

// 3. Exponent -> **
x = 2 ** 3;
console.log(x);

// 4. Increment/Decrement -> ++, --
x = 1;
x++;
console.log(x);

// 5. Assignment -> =, +=, -=, *=, /=, %=, **=

// 6. Comparison -> ==, ===, <, >, <=, >=, !=, !==
x = 2 == "2"; // value match
console.log(x);

x = 2 === "2"; // value and type match <- mostly used instead of ==
console.log(x);

x = 2 !== "2";
console.log(x);