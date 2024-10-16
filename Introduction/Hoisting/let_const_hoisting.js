// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10;

// let y; // Declaration is hoisted, but not initialized
// console.log(y); // ReferenceError
// y = 10; // Initialization happens here

// Variables declared with let and const are also hoisted, but they are not initialized during the hoisting process Accessing them before their declaration results in a ReferenceError.

// function name(){
//     console.log(a);
//     let a = 20;
// }
// name();
{
    console.log(p);
    const p = 30;
}