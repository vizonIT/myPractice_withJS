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



// console.log(window.innerWidth);

// Functions Challeng:
// 1. create a function called get celcius, that takes temperature in fahrenheit and converts to celcius. bonus: use a single line arow function for this task.

const getCelcius = f => (f - 32) * 5 / 9;

console.log(`The temperature is ${Math.ceil(getCelcius(64))}\xB0C`);
// where \xB0 is the symbol for degree or exponential zero

// 2. Create an arrow function called minMax() that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

const minMax = (arrNum) => {
  const min = Math.min(...arrNum);
  const max = Math.max(...arrNum);

  return {
    min,
    max,
  };

};

console.log(minMax([1, 2, 3, 4, 5, 0]))

// Calculator Challenge: Create a function called calculator that takes in 3 parameters num1, num2, and operator. The operator can be +, -, *, or /. The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message.

function calculator(num1, num2, operator) {
  let Calc;
  // switch (operator) {
  //   case '+':
  //     Calc = num1 + num2
  //     break;
  //   case '-':
  //     Calc = num1 - num2
  //     break;
  //   case '*':
  //     Calc = num1 * num2
  //     break;
  //   case '/':
  //     Calc = num1 / num2
  //     break;
  //   default:
  //     console.log(`Error: You have called a wrong operator`);
  //     break;
  // }
  if (operator === '+') {
    return Calc = num1 + num2;
  } if (operator === '-') {
    return Calc = num1 - num2;
  } if (operator === '*') {
    return Calc = num1 * num2;
  } if (operator === '/') {
    return Calc = num1 / num2;
  }
  else {
    return Calc = `Error: You have called a wrong operator`;
  }

};

console.log(calculator(15, 5, '+'));

// write a loop to print 1 to 10, let all even numbers print Number is an even number.

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is an even number`);
  } else { console.log(i) };
}

// Loop through an Array:
const names = ['Brad', 'Sam', 'Sarah', 'John', 'Tim'];

for (i = 0; i < names.length; i++) {
  if (i === 2) {
    console.log(`${names[i]} is the best.`)
  } else {
    console.log(names[i]);
  }
}

// FizzBuzz challenge: *Print/log the numbers from 1 to 100; For miltiples of three print *Fizz* instead of the number. For multiples of five print *Buzz*; For Numbers which are multiples of both three and five, print *FizzBuzz*.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizBuzz`);
  } else if (i % 3 === 0) {
    console.log(`Fizz`);
  } else if (i % 5 === 0) {
    console.log(`Buzz`);
  } else {
    console.log(i);
  };
}

// Using a forEach to log array values:
const Socials = ['Twitter', 'Linked In', 'Facebook', 'Instagram'];
Socials.forEach((item) => { console.log(item) });

// forEach allows you to pass in other specific arguments in the array: index and the full array:
Socials.forEach((item, index, Socials) => { console.log(`${index} ${item}`, Socials) });
// note that the array is called outside of the backticks in the console.log.

// Using Array.reduce on a shopping cart Total Price accumulator.
const cart = [
  { id: 1, name: 'product1', price: 130 },
  { id: 2, name: 'product2', price: 150 },
  { id: 3, name: 'product3', price: 200 }
];

cart.push({ id: 4, name: 'product4', price: 250 })
cart.push({ id: 5, name: 'product5', price: 300 })
const totalPrice = cart.reduce((acc, product) => {
  return acc + product.price;
}, 0);

console.log(`N` + totalPrice);

// Challenge: Take the People array and create an array called youngPeople that stores objects with ONLY name and email properties of all the people that are 25 and under. The name prperty should have their first and last name.

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-333',
    age: 45,
  },
  {
    firstName: 'Sarah',
    lastName: 'Soe',
    email: 'sarah@gmail.com',
    phone: '444-444-444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-555',
    age: 23,
  },
]

const youngPeople = people
  .filter((under25) => under25.age <= 25)
  .map((detail) => {
    return {
      name: `${detail.firstName} ${detail.lastName}`,
      email: detail.email,
    };
  })

console.log(youngPeople);

// Challenge: Add all the positive numbers in the array.
const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
  .filter((plusItem) => plusItem > 0)
  .reduce((acc, cur) => acc + cur, 0)

console.log(positiveSum);

// Challenge: create a new array called capitalized words from the words array, with the first letter of each word capitalized.

const words = ['coder', 'programmer', 'developer']

const capitalized = words.map((word) => {
  return word.charAt(0).toUpperCase() + word.substring(1)
});

console.log(capitalized)