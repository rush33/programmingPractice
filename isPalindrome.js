// Palindrome Numbber - Write a function that takes in a number and returns true if the number is a palindrome, false if it is not. A palindrome is a number that is the same forwards and backwards. Ex: 1234321 is a palindrome. 12345 is not a palindrome. 

const isPalindrome = (number) => {
    return number === +number.toString().split('').reverse().join('')
}

console.log(isPalindrome(121))

//without converting to string
