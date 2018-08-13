function binary_search(list, item) {
    let low = 0;
    let high = list.length - 1;
    let steps = 0;

    while (low <= high) {
        steps++;
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];

        if (guess === item) {
            console.log({steps});
            return mid;
        }

        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}

const my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3)); // 1 , 3 steps
console.log(binary_search(my_list2, 17));// 8, 3 steps

function myBinarySearch(list, item) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {

        let mid = Math.floor((low + high) / 2);
        guess = list[mid];

        if (guess === item) {
            return mid;
        }

        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}

const my_list3 = [1, 3, 5, 7, 9, 10, 11, 14, 17, 20, 21, 22, 23, 100, 111, 222, 333, 444, 555, 666, 777, 888, 999, 1000];

console.log(myBinarySearch(my_list3, 111));