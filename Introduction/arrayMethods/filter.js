// const numbers = [1, 2, 3, 4];
// const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]
// console.log(evenNumbers);
// Creates a new array with all elements that pass the test implemented by the provided function (returns true).


const numbers = [1, 2, 3, 4, 5];
const oddnumbers = numbers.filter(num => num % 2 != 0);
console.log(oddnumbers);