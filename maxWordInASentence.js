const checkWords =
  "I am not gonna live forever, but I wanna live while I am alive";

const findMostRepeatedWord = (str) => {
  // Clean up the string by removing punctuation and converting to lowercase
  const cleanedStr = str.replace(/[^\w\s]/g, "").toLowerCase();

  // Split the string into an array of words
  const words = cleanedStr.split(" ");

  // Create a dictionary to store word counts
  let wordCounts = {};

  // Iterate through each word and update the count
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word in wordCounts) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }

  // Find the word with the maximum occurrence
  let maxCount = 0;
  let mostRepeatedWord = "";
  for (let word in wordCounts) {
    if (wordCounts[word] > maxCount) {
      maxCount = wordCounts[word];
      mostRepeatedWord = word;
    }
  }

  return `Most repeated word is '${mostRepeatedWord}' with count ${maxCount}`;
};

console.log(findMostRepeatedWord(checkWords));
