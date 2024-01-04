function mergeSort(array) {
    // Determine the size of the input array.
    var arraySize = array.length;

    // If the array being passed in has only one element
    // within it, it is considered to be a sorted array.
    if (arraySize === 1) {
        return;
    }

    // If array contains more than one element,
    // split it into two parts (left and right arrays).
    var midpoint = Math.floor(arraySize / 2);
    console.log(midpoint);
    var leftArray = array.slice(0, midpoint);
    console.log(leftArray);
    var rightArray = array.slice(midpoint);
    console.log(rightArray);
    // Recursively call mergeSort() on
    // leftArray and rightArray sublists.
    mergeSort(leftArray);
    mergeSort(rightArray);

    // After the mergeSort functions above finish executing,
    // merge the sorted leftArray and rightArray together.
    merge(leftArray, rightArray, array);

    // Return the fully sorted array.
    return array;
}
let array = [5,1,3,8,4,9,2,0];
mergeSort(array);
function merge(leftArray, rightArray, array) {
    var index = 0;
    // [1,5][3,8]
    // [5,1,3,8]
    // [5][3,8]
    // [1,1,3,8]
    // [5][8]
    // [8]
    console.log('leftArray is ' + leftArray);
    console.log('rightArray is ' + rightArray);
    console.log('array is ' + array);
    while (leftArray.length && rightArray.length) {
        // console.log('array is: ', array);
        //is 3 < 1
        //is 3 < 5
        // is 8 < 5
        if (rightArray[0] < leftArray[0]) {
            // [1,3,3,8]
            array[index++] = rightArray.shift();
        } else {
            // [1,1,3,8]
            // [1,3,5,8]
            array[index++] = leftArray.shift();
        }
    }

    while (leftArray.length) {
        console.log('left array is: ', leftArray);
        array[index++] = leftArray.shift();
    }

    while (rightArray.length) {
        console.log('right array is: ', rightArray);
        array[index++] = rightArray.shift();
    }

    console.log('** end of merge function ** array is: ', array);
}
