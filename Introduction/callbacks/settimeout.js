// console.log("start");
// setTimeout(function execut1() {
//     console.log("execute1 called");
// }, 3000);
// console.log("end");



// function fun() {
//     console.log('Fun function called');
//     setTimeout(function execute2() {
//         console.log("execute2 called");
//     }, 2000);
// }

// fun();

// queue --> execut1 (3 sec) , execute2(3 Sec )

// OUTPUT :
// start
// end
// task completed

let id1 = setTimeout(function execute() {
    console.log("task completed 1");
}, 7000);

let id2 = setTimeout(function execute() {
    console.log("task completed 2");
}, 5000);