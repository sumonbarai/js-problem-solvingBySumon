//  Coding challenge #1: Print numbers from 1 to 10

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//  Coding challenge #2: Print the odd numbers less than 100

// for (let i = 1; i <= 100; i++) {
//   if (!(i % 2 === 0)) {
//     console.log(i);
//   }
// }

//Coding challenge #3: Print the multiplication table with 7
// solution:
/* 
const multiplicationTable = (number) => {
  for (let i = 1; i <= 10; i++) {
    let row = `${number} * ${i} = ${number * i}`;
    console.log(row);
  }
};

multiplicationTable(7);
*/

// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

// solution:
/*
const multiplicationFn = (number) => {
  for (let i = 1; i <= 10; i++) {
    let row = `${number} * ${i} = ${number * i}`;
    console.log(row);
  }
};
// run this multiplicationFn in 10 times
for (let i = 1; i <= 10; i++) {
  multiplicationFn(i);
  console.log("=========================");
}
*/

//Coding challenge #5: Calculate the sum of numbers from 1 to 10
// solution

/*
const sumFn = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  console.log(`Total Sum of ${num} is = ${sum}`);
};

sumFn(10);
*/

// Coding challenge #6: Calculate 10!
// solution

/*
function factorialFn(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  console.log(result);
}

factorialFn(10);
*/

//Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
// solution

/*
const sumOfOddNumber = (startNum, endNum) => {
  let result = 0;
  for (let i = startNum + 1; i < endNum; i++) {
    if (i % 2 === 1) {
      result += i;
    }
  }

  return result;
};

console.log(sumOfOddNumber(10, 30));
*/

// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit

// solution:
/*
const CelsiusToFahrenheit = (input) => {
  return input * (9 / 5) + 32;
};

const result = CelsiusToFahrenheit(20);

console.log(result);
*/

// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius

// solution:
/*
const fahrenheitToCelsius = (input) => {
  return ((input - 32) * 5) / 9;
};
const result = fahrenheitToCelsius(68);

console.log(result);
*/

// Coding challenge #10: Calculate the sum of numbers in an array of numbers
/*
const sumOfArray = (input) => {
  let sum = 0;
  input.forEach((value) => {
    sum += value;
  });
  return sum;
};
const result = sumOfArray([1, 2, -3, 10]);
console.log(result);
*/
//Coding challenge #11: Calculate the average of the numbers in an array of numbers

/* const AverageOfArray = (input) => {
  // checking input is array or not
  
  if (!(input instanceof Array)) {
    return "please submit valid input array";
  }
  if (input.length === 0) {
    return "please submit valid input array";
  }

  let sum = 0;
  input.forEach((value) => {
    sum += value;
  });
  return sum / input.length;
};
const result = AverageOfArray([12, 20]);
console.log(result); */

// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
/* 
const filterPositiveNumber = (arr) => {
  const positiveArray = arr.filter((val) => {
    if (val >= 0) {
      return true;
    }
  });
  return positiveArray;
};

const result = filterPositiveNumber([50, -30, 80]);

console.log(result);
 */

// Coding challenge #13: Find the maximum number in an array of numbers

/* const maxNumber = (arr) => {
  return Math.max(...arr);
};
const result = maxNumber([50, -30, 100, 80]);

console.log(result);
 */

// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion

/* const fibonacciSeries = (limit) => {
  const series = [0, 1];
  for (let i = 0; i < limit - 2; i++) {
    series.push(series.at(-1) + series.at(-2));
  }
  return series;
};
const result = fibonacciSeries(10);

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
 */

// Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion

// Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime

// Coding challenge #17: Calculate the sum of digits of a positive integer number

/* const sumOfDigits = (digits) => {
  if (typeof digits !== "number") {
    return "it is not possible to sum";
  }
  const convertToArray = digits.toString();
  let sum = 0;
  for (const iterator of convertToArray) {
    const convertToNumber = parseInt(iterator);
    sum += convertToNumber;
  }
  return sum;
};

const result = sumOfDigits(125);
console.log(`Sum of digit is = ${result}`); */

// Coding challenge #18: Print the first 100 prime numbers

/* // check number is prime
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) return true;

  const maxDiv = Math.sqrt(num);
  for (let i = 2; i <= maxDiv; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const printPrime = (num) => {
  let prime = [];
  for (let i = 0; i < num; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  return prime;
};

console.log(printPrime(100)); */

// Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

/* console.log(getPrime(10, 100));
function getPrime(nPrimes, startAt) {
  let arr = [];

  for (let i = startAt; arr.length < nPrimes; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }

  return arr;
}

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  const maxDiv = Math.sqrt(num);
  for (let i = 2; i <= maxDiv; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
 */
// Coding challenge #20: Rotate an array to the left 1 position
/* 
const arr = [2, 3, 5, 6, 7, 8];
const rotatedOnePositionLeft = (arr) => {
  const first = arr.shift();
  arr.push(first);
};
rotatedOnePositionLeft(arr);
console.log(arr);
 */
// Coding challenge #21: Rotate an array to the right 1 position

/* const arr = [2, 3, 5, 6, 7, 8];
const rotatedOnePositionLeft = (arr) => {
  const last = arr.pop();
  arr.unshift(last);
};
rotatedOnePositionLeft(arr);
console.log(arr);
 */

// Coding challenge #22: Reverse an array

/* const arr = [2, 3, 98, 986, 5, 6, 7, 8, 100, 85];
console.log(arr.reverse()); */

// Coding challenge #23: Reverse a string

/* const demo = "Javascript";
const reverseArray = (str) => {
  const convertToArray = Array.from(str);
  const convertToNewArray = convertToArray.reverse();
  const result = convertToNewArray.join("");
  return result;
};

console.log(reverseArray(demo));
 */
// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array
/* 
const arr1 = ["h", "k"];
const arr2 = ["ha", "ka"];

const mergeArr = (a, b) => {
  return a.concat(b);
};
console.log(mergeArr(arr1, arr2)); */

// Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

/* var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [1, 4, 5, 6, 14];

var ar = mergeExclusive(ar1, ar2);
console.log(ar);

function mergeExclusive(ar1, ar2) {
  var ar = [];

  for (let el of ar1) {
    if (!ar2.includes(el)) {
      ar.push(el);
    }
  }

  for (let el of ar2) {
    if (!ar1.includes(el)) {
      ar.push(el);
    }
  }

  return ar;
} */

// Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

/* const ar1 = [1, 2, 3, 10, 5, 3, 14];
const ar2 = [-1, 4, 5, 6, 14];

const searchAarry = (item1, item2) => {
  let newArray = [];
  for (let x of item1) {
    if (!item2.includes(x)) {
      newArray.push(x);
    }
  }
  return newArray;
};
console.log(searchAarry(ar1, ar2));

 */
// Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

/* // solution -1
const distinctArray = (array) => {
  let arr = [];
  array.forEach((item) => {
    if (!arr.includes(item)) {
      arr.push(item);
    }
  });
  return arr;
};
const a = [1, 1, 2, 3, 6, 8, 9, 8, 7, 2];
console.log(distinctArray(a)); */

// solution -2

/* const a = [1, 1, 2, 3, 6, 8, 9, 8, 7, 2];
const distinctArray = (arr) => {
  return [...new Set(arr)];
};
console.log(distinctArray(a)); */

// Coding challenge #28: Calculate the sum of first 100 prime numbers

/* // create is prime checker function
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  const maxDiv = Math.sqrt(num);
  for (let i = 2; i <= maxDiv; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const sumOfPrimeNumber = (numberOfPrime) => {
  let prime = [];
  for (let i = 0; prime.length < numberOfPrime; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  return prime.reduce((total, curr) => total + curr, 0);
};
console.log(sumOfPrimeNumber(100)); */

// Coding challenge #29: Print the distance between the first 100 prime numbers

// Coding challenge #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

// Coding challenge #31-a. Create a function that will return the number of words in a text
/* 
const numberOfWord = (sentence) => {
  return sentence.trim().split(" ").length;
};
const text =
  "Create a function that will capitalize the first letter of each word in a text";
console.log(numberOfWord(text));
 */

// Coding challenge #32. Create a function that will capitalize the first letter of each word in a text

/* const capitalizeFn = (sentence) => {
  const newArr = sentence.trim().split(" ");
  let capitalizeArr = [];
  newArr.forEach((word) => {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizeArr.push(capitalized);
  });
  return capitalizeArr.join(" ");
};

const text =
  "   Create a function that will capitalize the first letter of each word in a text";

console.log(capitalizeFn(text)); */

// Coding challenge #33. Calculate the sum of numbers received in a comma delimited string

/* const sumOfNumber = (str) => {
  const arr = str.split(",");
  let sum = 0;
  arr.forEach((element) => {
    const trim = element.trim();
    sum = sum + Number(trim);
  });
  return sum;
};
console.log(sumOfNumber("1,2, 3, 4")); */

// Coding challenge #34. Create a function that will return an array with words inside a text

/* var text =
  "Create a function, that will return an array (of string), with the words inside the text";

const wordFn = (text) => {
  return text.split(" ");
};
console.log(wordFn(text));
 */

// Coding challenge #35. Create a function to convert a CSV text to a “bi-dimensional” array

// Coding challenge #36. Create a function that converts a string to an array of characters
/* 
const convertToArr = (str) => {
  return Array.from(str);
};

console.log(convertToArr("i love bangladesh"));
 */

// Coding challenge #37. Create a function that will convert a string in an array containing the ASCII codes of each character

/* console.log(getCharCodes("I like JavaScript"));

function getCharCodes(str) {
  let ascii = [];
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    ascii.push(code);
  }
  return ascii;
}
 */

// Coding challenge #38. Create a function that will convert an array containing ASCII codes in a string

/* const ASCIICodeToString = (arr) => {
  return String.fromCharCode(...arr);
};

console.log(
  ASCIICodeToString([
    73, 32, 108, 105, 107, 101, 32, 74, 97, 118, 97, 83, 99, 114, 105, 112, 116,
  ])
);
 */

// Coding challenge #39. Implement the Caesar cypher

// Coding challenge #40. Implement the bubble sort algorithm for an array of numbers

// Coding challenge #41. Create a function to calculate the distance between two points defined by their x, y coordinates

// Coding challenge #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting

// Coding challenge 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number

// Coding challenge #44. Create a function that will convert a string containing a binary number into a number

// Coding challenge #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)

// Coding challenge #46-a. Find the maximum number in a jagged array of numbers or array of numbers

// Coding challenge #47. Deep copy a jagged array with numbers or other arrays in a new array

// Coding challenge #48. Create a function to return the longest word(s) in a string

// Coding challenge #49. Shuffle an array of strings

// Coding challenge #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.

// Coding challenge #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.

// Coding challenge #52. Calculate Fibonacci(500) with high precision (all decimals)

// Coding challenge #53. Calculate 70! with high precision (all digits)
