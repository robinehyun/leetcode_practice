let arr = [1, 3, 5, 9, 10];

let binarySearch = (arr, value, offset) => {
    // getting the midpoint of the array to shorten it
    let mid = Math.floor((arr.length+offset)/2); // result in index of 2
    if(arr[mid] === value) {
        return mid;
    } else if (arr[mid] > value) {
        console.log("is this hitting?")
        return binarySearch(arr, value, mid*-1)
    }
    return binarySearch(arr, value, mid)
}
// taking the array length of 5
// value of 3
// mid = 5+2/2 = 3.5
// if the number is higher +, if the number is lower -

console.log(binarySearch(arr, 3, 0));
