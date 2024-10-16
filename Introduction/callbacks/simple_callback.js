function greet(name, callback) {
    console.log('Hello ' + name);
     callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

// Call the greet function and pass sayGoodbye as the callback
greet('John', sayGoodbye);

function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

// function sayGoodbye() {
//     console.log('Goodbye!');
// }

// Call the greet function and pass sayGoodbye as the callback
greet('John', function sayGoodbye() {
    console.log('Goodbye!');
});