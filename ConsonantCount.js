/* Consonant Count

Have the function ConsonantCount(str) take the str string parameter being passed and return the number of consonants the string contains. */
  // code goes here  
  
  /* 1. create and use regex
  1A. /  / start and end of regex.
  1B.[b-df-hj-np-tv-xz]are consonents
  1C. g flag for global serch  and i flag for uppercase ,lowercase to be ignored.
   
  2. use str.match().length method to find length and then return it.  */
   
  return str.match(/[b-df-hj-np-tv-xz]/gi).length;  
}
   
// keep this function call here 
console.log(ConsonantCount(readline()));
