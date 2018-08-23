function quickSort(arr) {
	if (arr.length < 2) {
		return arr;
	} else {

		const randomIndex = Math.floor(Math.random() * arr.length);
		const pivot = arr.splice(randomIndex, 1);

		const less = [];
		const greater = [];

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > pivot) {
				greater.push(arr[i]);
			} else {
				less.push(arr[i]);
			}
		}
		return quickSort(less).concat(pivot).concat(quickSort(greater));
	}
}
const test = quickSort([3, 5, 2, 1, 4, -10, 100, 54, 22, 63, 2, 3, 64, -1, -3, 142, 43, 7, 0]);
console.log(test);