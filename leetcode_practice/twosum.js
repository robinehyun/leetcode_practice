// For example, suppose the array is like A = [2, 8, 12, 15], and the target sum is 20.

// 20 - 2 = 18, if 18 exists, we're going to push [0] and diff into []
// [2, 18]
// 20 - 8 = 12
// [2, 18] [8, 12]
// 20 - 12 = 8
// [8, 12] valid combo
// 20 - 15 = 5
// [2, 18] [8, 12] [12, 8] [15, 5]

let obj = {a: 'foo', b: 'bar'};
let arr = ['foo', 'bar'];

// obj = {'18': 0, '12': 1, }
// obj['12']

let array = [2, 8, 12, 15];
let target = 20;

let twoSum = (array, target) => {
    let memo = {};
    for (let i = 0; i<array.length; i++) {
        // currentValue = 2
        // currentValue = 8
        // currentValue = 12
        let currentValue = array[i];
        // 18 = 20-2;
        // 12 = 20-8;
        // 8 = 20-12;
        let diff = target - currentValue;
        // '18':2
        // '12': 8
        // '8': 12

        if (memo[currentValue] !== undefined) {
            return [i, memo[currentValue]];
        }
        // '18':0
        // '12': 1
        memo[diff] = i;
    }
}

console.log(twoSum(array,target));
