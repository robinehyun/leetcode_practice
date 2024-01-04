// Write a program to print all the LEADERS in the array.
// An element is a leader if it is greater than all the elements to its right side.
// And the rightmost element is always a leader.{16, 17, 4, 3, 5, 2} o/p - {2,5,17}

let array = [16, 17, 4, 3, 5, 2];
let leaderArray = [];

let findLeader = (array) => {
    leaderArray.push(array[array.length - 1]);

    for (let i = array.length - 2; i >= 0; i--) {
        if (array[i] > leaderArray[leaderArray.length - 1]) {
            leaderArray.unshift(array[i]);
        }
    }
};

findLeader(array);
console.log(leaderArray);
