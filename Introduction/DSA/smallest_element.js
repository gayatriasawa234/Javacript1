// const arr =[7,8,2,36,45]
// let min = Infinity;
// for( let i=0;i<arr.length;i++)
// {
//     if(arr[i] < min)
//     {
//         min = arr[i];
//     }
// }
// console.log(min);

function smallestElement(arr){
    let min = Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < min)
        {
            min = arr[i];
        }
    }
    return min;
}
const arr = [7, 8, 2, 36, 45];
let p = smallestElement(arr);
console.log(p);

