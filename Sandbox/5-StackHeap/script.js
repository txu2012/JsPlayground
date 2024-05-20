// Primitive -> creates new on stack
const p1 = "Rose";
console.log(p1);

let p2 = p1;
p2 = "Jane";

console.log(p1, p2);

// Reference -> creates on stack and reference same heap
const person = {
    name: "John"
}

console.log(person);

const newPerson = person;
newPerson.name = "Jonathan";

console.log(person, newPerson); // Jonathan