// Object challenge
const library = [
    {
        title: 'Book 1', 
        author: 'Jane Doe', 
        status: {
            own: true,
            reading: false,
            read: false
        }
    }, 
    {
        title: 'Book 2', 
        author: 'John Doe', 
        status: {
            own: true,
            reading: false,
            read: false
        }
    }, 
    {
        title: 'Touhou', 
        author: 'Reimu Hakurei', 
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
]

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

let {title: firstBook} = library[0];

const libraryJSON = JSON.stringify(library);

console.log(library)
console.log(libraryJSON)

// Functions Challenge
const getCelsius = (f) => ((f-32)*5)/9;
console.log(`The temperature is ${getCelsius(50)}\xB0C.`);

const minMax = (arr) => ({ min: Math.min(...arr), max: Math.max(...arr)})
console.log(minMax([1,2,3,4,5]));

(function (l, w) {
    console.log(`The area of a rectangle with a length of ${l} and width of ${w} is ${l*w}`);
})(10, 15);

((l, w) => console.log(`The area of a rectangle with a length of ${l} and width of ${w} is ${l*w}`))(15, 15)