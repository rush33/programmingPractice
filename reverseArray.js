// Reverse an Array:
// Write a function that takes an array as input and returns the reverse of that array.
// Input: An Array, e.g. [1, 2, 3]
// Output: An Array, e.g. [3, 2, 1]
// Constraints: Do not use the built-in reverse() function or method
// Edge Cases: What if the input is an empty array? What if the input contains special characters or numbers?

const array = [1, 2, 3];

const reverse = (array) => {
  let reverseArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
};

console.log(reverse(array));
