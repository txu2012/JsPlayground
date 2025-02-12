const myString = 'developer';
console.log(myString);

const myNewString = myString.substring(0, 1).toUpperCase() + myString.substring(1);
console.log(myNewString);

const myNewString2 = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(myNewString2);

const myNewString3 = myString[0].toUpperCase() + myString.substring(1);
console.log(myNewString3);

const myNewString4 = myString[0].toUpperCase() + myString.slice(1);
console.log(myNewString4);

console.log(`${myString.charAt(0).toUpperCase()}${myString.substring(1)}`);