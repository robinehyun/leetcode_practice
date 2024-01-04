// put all 0's at the end
// a = [2,3,0,0,5,0,8]
// time complexity = how much time it will take to go through it
// space complexity = how much memory it's going to use

// O(1)
// O(n) = linear
// O(^n)

// does it need to be sorted or just the 0's at the end

// index(0) = 2
// index(1) = 3
// index(2) = 0
// let newArray = [2]
// index(3) = 0
// newArray = [2,3]
// index(4) = 5
// newArray.shift() > [3]
// a[2] = 5
// a[4] = 0
// [2,3,5,0,0,8]
// index(5) = 0
// newArray = [3,5]
// index(6) = 8
// newArray.shift() > [5]
// a[3] = 8
// a[6] = 0
// [2,3,5,8,0,0]
// whatver is left append it
// [2,3,5,8,0,0,0]
var a = [2,3,0,0,5,0,8]
var index = 0;
var newArray = [];
// 0 < 8
while(index<a.length) {
    // value = 2
    let value = a[index];
    // 2 === 0 > false
    if(value === 0) {
        newArray.push(index);
    } else {
        // zeroIndex = []
        // skips the if condition until it hits 0
        let zeroIndex = newArray.shift();
        if(zeroIndex != undefined) {
            console.log('this is zeroIndex ' + zeroIndex);
            // a[2] = 2
            console.log('this is the value ' + value);
            a[zeroIndex] = value;
            // a[0] =
            a[index] = 0;
        }
    }
    index++;
}

console.log(a)
