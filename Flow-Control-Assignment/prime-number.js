// 質數

let numbers = 100000;

for (let i = 2; i <= numbers; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        // console.log("是i-" + i);
        // console.log("是j-" + j);

        if (
            i !== 2 &&
            (i % 2 === 0 || i % j === 0 || Number.isInteger(Math.sqrt(i)))
        ) {
            isPrime = false;
            // console.log("用來檢查j=" + j);
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}
