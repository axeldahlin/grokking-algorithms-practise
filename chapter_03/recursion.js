function recursiveSum(arr) {
	if (arr.length == 1) {
		return arr[0];
	} else {
		const item = arr.splice(0, 1);	
		return Number(item) + Number(recursiveSum(arr));
	}
}

const test1 = recursiveSum([2, 4, 6, -6, 4, 1000, -10]);
//console.log(test1);

function recursiveCount(arr) {
	if (arr.length == 0) {
		return 0;
	}  else {
		arr.splice(0, 1);
		return 1 + recursiveCount(arr);
	}
}

const test2 = recursiveCount([2, 4, 6, 1, 1, 4, 3, -1000, 7, -1]);
//console.log(test2);

function recursiveMax(arr) {
	if (arr.length == 1) return arr[0];
	
	const item1 = arr[0];
	const item2 = arr[1];

	if (item1 > item2) {
		arr.splice(1, 1);
	} else {
		arr.splice(0, 1);
	}
	return recursiveMax(arr);
}

const test3 = recursiveMax([2, 4, 6, 222, 1, 1, 4]);
//console.log(test3);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 44, 55];

//This is both a binary search and a D&C algorithms
function findIndex(arr, item) {
	if (arr.length == 1) return arr[0];

	let length = arr.length;
	let midPoint = Math.floor(length / 2);
	console.log(arr);
	console.log({midPoint})

	if (arr[midPoint] > item) {
		const newArray = arr.slice(0, midPoint);
		return findIndex(newArray, item);
	} else {
		const newArray = arr.slice(midPoint, arr.length);
		return findIndex(newArray, item);
	}
}
console.log(findIndex(arr, 44));