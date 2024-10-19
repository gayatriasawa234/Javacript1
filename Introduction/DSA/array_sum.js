// const array = [1, 2, 3, 4, 5, 6]
// let sum = 0;
// for (const ele of array) {
//     sum = sum + ele;
// }
// console.log(sum);



function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
  
}

arraySum([1, 2, 3, 4]);


// const array = [1, 2, 3, 4, 5, 6]
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
// }
// console.log(sum);