function firstRepeatEle(arr) {
    let repeatEle = -1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                repeatEle = arr[i];
                break;
            }
        }
        if (repeatEle != -1) {
            break;
        }
    }
    return repeatEle;
}


const array = [1, 2, 3, 4, 5, 3, 4]

const firstRepeatEele = firstRepeatEle(array)

console.log(firstRepeatEele);