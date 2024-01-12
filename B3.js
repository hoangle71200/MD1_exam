let x = parseInt(prompt('Nhập số '));

function sumOfListPrime(x) {
    let sum = 0;
    for (let i=0; i<=x; i++) {
        let count = 0;
        if (i < 2) {
            continue;
        } else {
            for (let j=2; j<=Math.sqrt(i); j++) {
                if (i % j === 0) {
                    count++;
                }
            }
            if (count === 0) {
                sum += i;
            } else {
                count = 0;
                continue;
            }
        }
    }
    console.log(sum)
}
sumOfListPrime(x)




