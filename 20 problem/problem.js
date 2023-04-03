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
// ====================start===================
// const arr = ["hw", "hello", "wordss", "foo", "bar"];
// let longest = arr[0];
// arr.forEach((val) => {
//   if (val.length > longest.length) {
//     longest = val;
//   }
// });
// console.log(longest);
// =====================end====================
// problem:07 Given an array of Numbers , find the average
// ====================start===================
// const arr = [1, 2, 3, 4, 5];
// const average = (num) => {
//   const total = num.reduce((total, current) => {
//     return total + current;
//   }, 0);
//   return total / num.length;
// };

// console.log(average(arr));
// =====================end====================
// problem:08 Given an array of strings , sort them in alphabetical order
// ====================start===================
// const arr = ["man", "can", "do", "apple", "everything"];
// const result = arr.sort();
// console.log(result);
// =====================end====================
// problem:09 Given an array of numbers , remove the all duplicates
// ====================start===================
// const arr = [1, 2, 3, 4, 5, 5, 2, 8];
// solution : 01
// const uniqueArray = [...new Set(arr)];
// console.log(uniqueArray);
// solution : 02
// const uniqueArray = [];
// arr.forEach((num) => {
//   if (!uniqueArray.includes(num)) {
//     uniqueArray.push(num);
//   }
// });

// console.log(uniqueArray);

// =====================end====================
// problem:10 Given an array of integers , find two numbers the add up to a target value
// ====================start===================

// =====================end====================
// problem:11 a food ordering app needs to sort the menu items by price
// ====================start===================
// const menuItem = [
//   { name: "burger", price: 5.99 },
//   { name: "fries", price: 2.99 },
//   { name: "soda", price: 1.99 },
//   { name: "pizza", price: 10.99 },
// ];

// menuItem.sort((a, b) => {
//   return a.price - b.price;
// });
// console.log(menuItem);
// =====================end====================
// problem:12 a social media app needs to find all unique hashtags used in a users posts
// ====================start===================
// const userPost = [
//   "just we want for a #run #fitness",
//   "enjoying the #weekend #friends",
//   "can't wait #run for the #vacation #beach",
// ];

// const uniqueHashTag = new Set();

// for (let post of userPost) {
//   const words = post.split(" ");
//   words.forEach((word) => {
//     if (word.startsWith("#")) {
//       const actualWord = word.slice(1);
//       uniqueHashTag.add(actualWord);
//     }
//   });
// }

// console.log(uniqueHashTag);

// =====================end====================
// problem:13 a weather app needs to formate a list of temperatures in celsius and fahrenheit for display
// ====================start===================
// const temperatures = [12, 25, 8, 19, 3]; // is celsius temperature

// const formatedTemparature = temperatures.map((celsius) => {
//   const fahrenheit = celsius * 1.8 + 32;
//   return `${celsius} °C (${fahrenheit.toFixed(1)})°F`;
// });
// console.log(formatedTemparature);
// =====================end====================
// problem:14 a video sharing site need to keep track of the number o f views, like and comments on each video
// ====================start===================
// const videos = [
//   {
//     id: 1,
//     title: "how code is run",
//     views: 1000,
//     comments: [{ id: 1, text: "very usefully" }],
//   },
//   {
//     id: 2,
//     title: "how code is run",
//     views: 2000,
//     comments: [{ id: 1, text: "very thanks" }],
//   },
// ];

// function incrementView(id) {
//   const video = videos.find((v) => {
//     return v.id === id;
//   });

//   if (video) {
//     video.views += 1;
//   }
//   console.log(video);
// }
// function addComment(id, comment) {
//   const video = videos.find((v) => {
//     return v.id === id;
//   });

//   if (video) {
//     video.comments.push({ id: video.comments.length + 1, text: comment });
//   }
//   console.log(video);
// }

// incrementView(1);
// addComment(1, "i am very happy");
// addComment(1, "i am very happy");
// =====================end====================
// problem:15 facebook needs to keep track of the number of reactions (like, love haha wow sad,angry) on each post
// ====================start===================
// const videos = [
//   {
//     id: 1,
//     title: "how code is run",
//     comments: [{ id: 1, text: "very usefully" }],
//     reactions: {
//       like: 50,
//       love: 100,
//       haha: 20,
//       wow: 15,
//       sad: 1,
//       angry: 0,
//     },
//   },
//   {
//     id: 2,
//     title: "how code is run",
//     comments: [{ id: 1, text: "very thanks" }],
//     reactions: {
//       like: 150,
//       love: 1100,
//       haha: 120,
//       wow: 115,
//       sad: 11,
//       angry: 10,
//     },
//   },
// ];

// const incrementReaction = function (id, type) {
//   const post = videos.find((v) => {
//     return v.id === id;
//   });
//   if (post) {
//     post.reactions[type] = post.reactions[type] + 1;
//   }
// };
// incrementReaction(1, "haha");
// incrementReaction(2, "love");
// console.log(videos);
// =====================end====================
// problem:16 based on finding the two numbers that add up to a target value
// ====================start===================
// =====================end====================
// problem:17 a restaurant wants to keep track of its inventory of ingredients for various dishes . the restaurants chefs need to be able to easily update the inventory levels for each ingredient as then use them in dishes
// ====================start===================
// =====================end====================
// problem:18 given an array of object representing products sort the products by price from lowest to height
// ====================start===================
// =====================end====================
// problem:19 suppose you have an array of objects representing people and you wants to filter the array to only include people ,who are over 18 years old
// ====================start===================
// =====================end====================
// problem:20 in a web application that displays a list of product with their prices in different currencies . lets say that we have an array of products ,where each product has a name and a price property USD. we want to display a list of these products with prices converted to a different currency, based on the users preferences.
// ====================start===================
// =====================end====================
