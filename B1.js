let arrDiem = [1,2,3,4,5,6,7,8,9];

function findAvg (arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(findAvg(arrDiem));