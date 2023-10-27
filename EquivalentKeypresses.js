/*
Equivalent Keypresses
Have the function EquivalentKeypresses(strArr) read the array of strings stored in strArr which will contain 2 strings representing two comma separated lists of keypresses.
Your goal is to return the string true if the keypresses produce the same printable string and the string false if they do not. 
A keypress can be either a printable character or a backspace represented by -B. 
You can produce a printable string from such a string of keypresses by having backspaces erase one preceding character.
Examples
Input: ["a,b,c,d", "a,b,c,d,-B,d"]
Output: true
Input: ["c,a,r,d", "c,a,-B,r,d"]
Output: false

Tags
array Google */

function EquivalentKeypresses(strArr) { 

  // code goes here  
  const arr1 = strArr[0].split(",");
  const arr2 = strArr[1].split(",");

  const  strA = [];
  const  strB = [];

  arr1.map(char => char === "-B" ? strA.pop() : strA.push(char));  
  arr2.map(char => char === "-B" ? strB.pop() : strB.push(char)); 
  return strA.join() === strB.join();

}
   
// keep this function call here 
console.log(EquivalentKeypresses(readline()));
