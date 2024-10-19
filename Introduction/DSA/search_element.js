// const arr =[1, 2, 3, 4, 5, 6];
// let number=5;
// for(let i=0; i<arr.length; i++){
//     if (arr[i] === 5)
//     {
//         console.log(number);
//      break;
//     }
// }


function searchElement(number, arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {

            return true;

        }
    }
    return false;

}
const arr = [1, 2, 3, 4, 5];
let p = searchElement(9, arr);
console.log(p);