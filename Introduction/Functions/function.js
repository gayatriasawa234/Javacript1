// // function func_1(x) {
// //     console.log(x + 10);
// //     return x * 10;
// // }
// // function func_2(x) {
// //     console.log(x + 10);
// // }
// // console.log("calling 1st function", func_1(2), func_2(11), func_1(5), func_2(3));
// // console.log("calling 2nd function", func_2(4));

// function func_1(x) {
//     console.log(x + 10);
//     return x * 10;
// }
// function func_2(x) {
//     console.log(x + 10);
// }
// // console.log("calling 1st function", func_1(2), func_2(11), func_1(5), func_2(3));
// // console.log("calling 2nd function", func_2(4));


// let t = func_1(2);
// console.log(t);

// let p = func_2(10);

// console.log(p);
// // let p = func_2(10);

// console.log(func_2(10));
hoistedFunction(); // "Hello, World!"

function hoistedFunction() {
  console.log("Hello, World!");
}