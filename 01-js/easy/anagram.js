/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Your code here
  var str__1=str1.toLowerCase().replace(/\s/g,"");
  var str__2=str2.toLowerCase().replace(/\s/g,"");
  if(str__1.length!=str__2.length) return false;
  var str_1=str__1.split('').sort().join('');
  var str_2=str__2.split('').sort().join('');
  console.log(str_1,str_2);

  return str_1===str_2;
}

module.exports = isAnagram;
