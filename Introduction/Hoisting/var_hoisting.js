// console.log(x); // undefined (not an error)
// var x = 5;

// var x;
// console.log(x); // undefined
// x = 5;

// 1. Variable Hoisting (var)
// When variables are declared using var, the declaration is hoisted to the top of its scope (either the function scope or the global scope), but the initialization is not.

function gayatri(){
    console.log(a);
    var a = 10;
}
gayatri();