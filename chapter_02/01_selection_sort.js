//find smallest elemnt in array:

function findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 0; i < arr.length; i ++) {
        if (array[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

const array = [11, 3, 55, 23, 11, 2, 4, 77, 11 , 6];

console.log(findSmallest(array));

//sort the array

function selectionSort(arr) {
    const sortedArr = [];
    for (let i = 0; i < arr.length; i++) {
        let smallestItem = findSmallest(arr);
        sortedArr.push(...arr.splice(smallestItem, 1));
    }
    return sortedArr;
}

console.log(selectionSort(array));