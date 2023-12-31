/* 
easy
Closest Enemy
Have the function ClosestEnemy(arr) take the array of numbers stored in arr and from the position in the array where a 1 is, 
return the number of spaces either left or right you must move to reach an enemy which is represented by a 2.
For example: if arr is [0, 0, 1, 0, 0, 2, 0, 2] then your program should return 3 because the closest enemy (2) is 3 spaces away from the 1.
The array will contain any number of 0's and 2's, but only a single 1. It may not contain any 2's at all as well, where in that case your program should return a 0.

Examples
Input: [1, 0, 0, 0, 2, 2, 2]
Output: 4
Input: [2, 0, 0, 0, 2, 2, 1, 0]
Output: 1

Tags
array searching */

function ClosestEnemy(arr) { 

  // code goes here  

let range = arr.indexOf(1);                                                                   // 1. Find the coordinates(location) of the 1(soldier)
for (let i = 1; i <arr.length; i++) {                                                         // 2.Find the paths to 2(enemy) from soldier, left or right.
if (arr[range + i] === 2 || arr[range - i] === 2) {
          return i;                                                                           // 3.If fount index of path from range, return  i.
    }
  }
          return arr.includes(2) ? range : 0;                                                 // 4. return range.

}
console.log(ClosestEnemy(readline()));
