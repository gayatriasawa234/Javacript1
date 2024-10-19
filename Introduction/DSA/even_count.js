// const arr = [1, 2, 3, 4, 5];
// let count = 0;
// for(let i=0; i<arr.length; i++)
// {
//     if (arr[i] % 2 === 0){
//     count++;
// }
// }

// console.log(count);


function evenCount(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++)
    {
         if(arr[i] % 2 === 0){
           count++;
         }
    }
    return count;
}
const arr = [1, 2, 3, 4];
let count = evenCount(arr);
console.log(count);