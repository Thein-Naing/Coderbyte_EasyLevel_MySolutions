/* Time Convert
Have the function TimeConvert(num) take the num parameter being passed and 
return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). 
Separate the number of hours and minutes with a colon. */
// rumor say it is an interview challenge.

  function TimeConvert(num) { 

  // code goes here  
  let hours = Math.floor( num / 60); // calculate hours
  let minutes = num % 60;  // calculate  remainder for  minutes
 

  return `${hours}:${minutes}`  // use ternary operator to format : sign

}
   
// keep this function call here 
console.log(TimeConvert(readline()));
