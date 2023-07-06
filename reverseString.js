// Reverse a String: Write a function that takes a string as input and returns the reverse of that string.
// Input: A String, e.g. "Hello World"
// Output: A String, e.g. "dlroW olleH"
// Constraints: Do not use the built-in reverse() function or method
// Edge Cases: What if the input is an empty string? What if the input contains special characters or numbers?

const string = "Hello World";

const reverseString = (str) => {
  reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

console.log(reverseString(string));

// Reverse a String: Write a function that takes a string as input and returns the reverse of the words in the string while the order of the words remain the same.
// Input: A String, e.g. "Hello World"
// Output: A String, e.g. "olleH dlroW"

const string1 = "Hello World";

const reverseString1 = (str) => {
  const words = str.split(" "); //split into words

  const reversedWords = words.map((word) => {
    //access each word
    const letters = word.split(""); //split the letters
    const reversedLetters = letters.reverse(); //reverse the letters
    const reversedWord = reversedLetters.join(""); //join the reversed letter into a word
    return reversedWord;
  });

  const reversedString = reversedWords.join(" "); //join the reversed words into a string
  return reversedString;
};

console.log(reverseString1(string1));
