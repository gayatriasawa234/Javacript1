// const arr = [4,6,2,7,8,2,98,65,86,36,46,4]
// let largest = 0;
// for( let i=0;i<arr.length;i++)
// {
//     if(arr[i] > largest)
//     {
//         largest = arr[i];
//     }
// }
// console.log(largest);


// const arr =[-7,-8,-2,-36]
// let largest = -Infinity;
// for( let i=0;i<arr.length;i++)
// {
//     if(arr[i] > largest)
//     {
//         largest = arr[i];
//     }
// }
// console.log(largest);

function largestelement(arr) {
    let largest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
const arr = [1, 2, 3,4];
let largest = largestelement(arr);
console.log(largest);

