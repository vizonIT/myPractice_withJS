'use strickt'

// const name = 'developer';

// // const mordify = name.charAt(0).toUpperCase() + name.substring(1);

// // const mordify = name[0].toUpperCase() + name.substring(1);

// const mordify = `${name[0].toUpperCase()}${name.substring(1)}`;

// console.log(mordify);

// create a variable called x that is a random number between 1 and 100; and a variable yield, that is a random number between 1 and 50.

// const x = Math.floor((Math.random() * 100 + 1));
// const y = Math.floor((Math.random() * 50 + 1));

// const productOutput = `${x} * ${y} = ${x * y}`;
// const diffOutput = `${x} - ${y} = ${x - y}`;
// const rmOutput = `${x} % ${y} = ${x % y}`;
// const divOutput = `${x} / ${y} = ${x / y}`;

// console.log(x, y);
// console.log(productOutput);
// console.log(diffOutput);
// console.log(rmOutput);
// console.log(divOutput);

// Dates and Time!!!
let d = Date(12, 11, 2023, 12, 30);
d = new Date("10 / 12 / 2023 12:30:00");

d = Date()

console.log(d)

// const arr = [1, 4, 5, 8, 10, 12];

// console.log(arr);

// Challenge1: create an Array of 1,2,3,4,5... mutate it to give a result of an Array of [6, 5, 4, 3, 2, 1, 0]

const firstArray = [1, 2, 3, 4, 5];

firstArray.push(6);
firstArray.unshift(0);
firstArray.reverse();

console.log(firstArray)


// Challenge2: combine arr1 = [1,2,3,4,5] and arr2 = [5,6,7,8,9,10] to have arr3 with [1,2,3,4,5,6,7,8,9,10]

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10]

// remove element 5 from arr1:
// arr1.pop();

// concate arr1 with arr2:
// const arr3 = arr1.concat(arr2);
// console.log(arr3)


// Or:
// const arr4 = arr1.concat(arr2);
// arr4.splice(4, 1)

// console.log(arr4);

// Object Challenges:
const library = [
  {
    title: 'New Phase',
    author: 'Benjamin Kelly',
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: 'Glory Days',
    author: 'Joshua Selman',
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: 'Wisdom for Profits',
    author: 'David Oyedepo',
    status: {
      own: true,
      reading: false,
      read: false
    }
  }
];

// change the read status to true:
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Destructure the title from first book, rename it to firstBook:
const { title: firstBook } = library[0];
console.log(firstBook)
console.log(library);

// trun the bribrary object into a JSON file:

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);



