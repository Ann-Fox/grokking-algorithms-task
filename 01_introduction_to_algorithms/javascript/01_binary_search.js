function binarySearch(array, item) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = array[mid];

        if (guess == item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}

const myArray = [1, 2, 5, 9, 7, 8, 6];
const myFunctionOne = binarySearch(myArray, 2);
const myFunctionTwo = binarySearch(myArray, 9);
const myFunctionTree = binarySearch(myArray, 45);

console.log(myFunctionOne);
console.log(myFunctionTwo);
console.log(myFunctionTree);
