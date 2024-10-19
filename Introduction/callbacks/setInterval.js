// setInterval( function() {
//     console.log("task done again.");
// }, 3000);

// const id = setInterval(function () {
//     console.log("task done again.");
// }, 3000);

// console.log(id);

let id = setInterval(function execute1() {
    console.log("task done again.");
}, 3000);

setTimeout(function execute2() {
    clearInterval(id);
}, 13000);

