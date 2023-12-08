/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const str1=str.toLowerCase().replace(/[^a-z0-9]/g,'');
    const vowels=['a','e','i','o','u'];
    let count =0;
    for(const alpha of vowels){
      for(let i=0;i<str1.length;i++){
          if(alpha===str1[i]) count+=1;
      }
    }
  return count;
}

module.exports = countVowels;