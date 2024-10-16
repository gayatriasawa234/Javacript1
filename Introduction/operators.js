// arithmetic operators
// console.log(10 + 2);
// console.log(10 - 2);
// console.log(10 * 2);
// console.log(10 / 2);
// console.log(10 % 2);


// assignment operators
// let x = 10;
// console.log(x =x+ 2);
// console.log(x =x-2);
// console.log(x=x*2);
// console.log(x=x/2);
// console.log(x = x% 2);

// console.log(4 || 0);                    // 4
// console.log(0 || 4);                    // 4
// console.log(4 || 5);                    // 4
// console.log(5 || 4);                    // 


// if (0 || 4) {
//     console.log('inside if block')
// }

// if (undefined || false) {

//     console.log('inside block')
// }

// if (null || 3) {
//     console.log('inside is block')
// }

console.log(null || null);              // null : "null" is falsy value
console.log(null || undefined);         // undefined
console.log(undefined || undefined);    // undefined : "undefined" is falsy value
console.log(undefined || null);         // null
console.log(null || 5);                 // 5
console.log(undefined || 5);            // 5
console.log((10 > 5) || (7 < 6));       // true

let h = 10;
if (h === 10) {
    console.log("h is strictly equal to 10");
} else {
    console.log("h is not strictly equal to 10");
}


let g = "10";
if (g == 10) {
    console.log("g is equal to 10 (abstract comparison)");
}