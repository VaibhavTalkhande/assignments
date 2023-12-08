/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largest= numbers[0];
    for(const number of numbers){
        
        if(largest<number) largest=number;
    }
    return largest;
}

module.exports = findLargestElement;