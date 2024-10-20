// It is not necessary to use brackets with "typeof".
console.log(typeof 12);                     // "number"
console.log(typeof "abcd");                 // "string"
console.log(typeof -0);                     // "number"
console.log(typeof undefined);              // "undefined"
console.log(typeof null);                   // "object"
console.log(typeof {"tarun" : 123});       // "object"
console.log(typeof NaN);                    // "number"
console.log(typeof Symbol('hey'));          // "symbol"
console.log(typeof true);                   // "boolean"
console.log(typeof typeof 12);              // "string"
console.log(typeof(12));                    // "number"
console.log(typeof(typeof(12)));            // "string"
console.log(typeof []);                     // "object"