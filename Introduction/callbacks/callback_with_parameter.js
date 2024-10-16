// function processNumber(number, callback) {
//     const result = number * 2;
//     callback(result);
// }

// function displayResult(result) {
//     console.log('Result: ' + result);
// }

// // Pass displayResult as a callback with a processed number
// processNumber(5, displayResult);

// function greeting(name) {
//     console.log(name);
// }

function processUserInput(callback) {
    let name='tarun'
    callback(name);
}

processUserInput(function greeting(name) {
    console.log(name);
}
); 