// problem:01 Given an array of numbers , find the smallest number
// ====================start===================
// const arr = [20, 60, 80, -60, -90, 40, 12, 600, 81, 1];
// solution-1:
// const smallNumber = Math.min(...arr);
// console.log(smallNumber);
// solution-2:
// const ascendingOrder = arr.sort((a, b) => {
//   return a - b;
// });

// const smallestNumber = ascendingOrder.at(0);
// console.log(smallestNumber);
// =====================end====================
// problem:02 Given an array of numbers , find the largest number
// ====================start===================
// const arr = [20, 60, 80, -60, -90, 40, 12, 600, 81, 1];
/* // solution-1:
const largestNumber = Math.max(...arr);
console.log(largestNumber); */

// const ascendingOrder = arr.sort((a, b) => {
//   return a - b;
// });
// const largestNumber = ascendingOrder.at(-1);
// console.log(largestNumber);

// =====================end====================

// problem:03 Given an array of numbers , find the sum of all number
// ====================start===================
// solution:
// const arr = [1, 2, 3, 4, 5, 10];
// const sumOfNumber = arr.reduce((total, current) => {
//   return total + current;
// }, 0);
// console.log(sumOfNumber);
// =====================end====================
// problem:04 Given an array of Strings , create a new array with the first letter of each string
// ====================start===================
// const arr = ["hello", "word", "foo", "bar"];
// -------------solution:1----------
// let newArr = [];
// arr.forEach((val) => {
//   newArr.push(val.slice(0, 1));
// });
// console.log(newArr);
// -------------solution:2----------
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i][0]);
// }
// console.log(newArr);

// =====================end====================
// problem:05 Given an array of  numbers, create a new array with only even numbers
// ====================start===================
// const arr = [1, 2, 3, 4, 5, 6];
// const newArr = arr.filter((num) => {
//   if (num % 2 === 0) {
//     return num;
//   }
//   return false;
// });

// console.log(newArr);

// =====================end====================
// problem:06 Given an array of Strings , find the longest string
// problem:07 Given an array of Numbers , find the average
// problem:08 Given an array of strings , sort them in alphabetical order
// problem:09 Given an array of numbers , remove the all duplicates
// problem:10 Given an array of integers , find two numbers the add up to a target value
// problem:11 a food ordering app needs to sort the menu items by price
// problem:12 a social media app needs to find all unique hashtags used in a users posts
// problem:13 a weather app needs to formate a list of temperatures in celsius and fahrenheit for display
// problem:14 a video sharing site need to keep track of the number o f views, like and comments on each video
// problem:15 fecebook nees to keep track of the number of reactions (like, love haha wow sad,angry) on each post
// problem:16 based on finding the two numbers that add up to a target value
// problem:17 a restaurant wants to keep track of its inventory of ingredients for various dishes . the restaurants chefs need to be able to easily update the inventory levels for each ingredient as then use them in dishes
// problem:18 given an array of object representing products sort the products by price from lowest to height
// problem:19 suppose you have an array of objects representing people and you wants to filter the array to only include people ,who are over 18 years old
// problem:20 in a web application that displays a list of product with their prices in different currencies . lets say that we have an array of products ,where each product has a name and a price property USD. we want to display a list of these products with prices converted to a different currency, based on the users preferences.
