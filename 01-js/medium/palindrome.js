/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strClean = str.replace(/[^a-z0-9]/gi, "");
  let strInput = strClean.toLowerCase();
  let left = 0;
  let right = strInput.length - 1;

  while (left < right) {
    if (strInput[left] !== strInput[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

module.exports = isPalindrome;
