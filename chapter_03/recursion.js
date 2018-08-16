function sum(arr) {
    if (arr.length == 1) {
        return arr[0];
    } else {
        const item = arr.splice(0, 1);
        
        return Number(item) + Number(sum(arr));
    }
}

const array = [2, 4, 6, -6, 4, 1000, -10];

console.log(sum(array));

