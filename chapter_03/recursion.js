function sum(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr.splice(0, 1) + sum(arr);
    }
}


const array = [1, 4, 5];

console.log(sum(array));
