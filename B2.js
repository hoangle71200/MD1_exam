let arrDiem = [1,2,3,4,5,6,7,8,9];

function insertNumberToArray(arr, x, index) {
    let newArr = new Array(arr.length+1);
    if (index < 0 || index > arr.length) {
        return arr;
    } else {
        for (let i=0; i<newArr.length; i++) {
            if (i < index) {
                newArr[i] = arr[i];
            } else if (i === index) {
                newArr[i] = x;
            } else {
                newArr[i] = arr[i-1];
            }
        }
        return newArr;
    }
}

console.log(insertNumberToArray(arrDiem, 'hello', 0))