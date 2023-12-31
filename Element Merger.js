/* Element Merger
easy 

Have the function ElementMerger(arr) take the array of positive integers stored in arr and perform the following algorithm: 
continuously get the difference of adjacent integers to create a new array of integers, 
then do the same for the new array until a single number is left and return that number. For example: if arr is [4, 5, 1, 2, 7] 
then taking the difference of each pair of elements produces the following new array: [1, 4, 1, 5]. 
Then do the same for this new array to produce [3, 3, 4] -> [0, 1] -> 1. So for this example your program should return the number 1 
because that is what's left at the end.
Examples
Input: [5, 7, 16, 1, 2]
Output: 7
Input: [1, 1, 1, 2]
Output: 1

Tags
array math fundamentals Node.js */

function ElementMerger(arr) { 

  // code goes here  

if (arr.length === 1) return arr[0];                  // edge case

result = [];
for (let i = 0; i < arr.length - 1; i++) {
result.push(Math.abs(arr[i] - arr[i + 1]));           // add the difference of adjacent integers to result.
}

return ElementMerger(result);  // recurrsive call to result.

}  

// return arr.length > 1 ?  arr.map((val,ind) => (ind < arr.length - 1) ? newArr.push(Math.abs(val - arr[ind + 1])) : 0;

// keep this function call here 
console.log(ElementMerger(readline()));
