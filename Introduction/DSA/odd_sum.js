// const arr =[1, 2, 3, 4, 5];
// let sum = 0;
// for( let i=0;i<arr.length;i++)
// {
//     if(arr[i] %2 != 0)
//     {
//         sum = sum + arr[i];
//     }
// }
// console.log(sum);


function oddSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 != 0){
            sum = sum + arr[i];
     }
    }
    return sum;

}
const arr = [1, 2, 3, 4];
let a = oddSum(arr);
console.log(a);