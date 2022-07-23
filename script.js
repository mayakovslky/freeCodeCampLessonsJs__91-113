// 91. Testing Objects for Properties

// function checkObj(obj, checkProp) {
//   if (obj.hasOwnProperty(checkProp)) {
//     return obj[checkProp];
//   } else {
// return "Not Found";
//   }
// }

// 92. Manipulating Complex Objects

// var myMusic = [
//   {
//     artist: "Billy Joel",
//     title: "Piano Man",
//     release_year: 1973,
//     formats: ["CD", "8T", "LP"],
//     gold: true
//   },
//   {
//     artist: "Deep Purple",
//     title: "Smoke on the water",
//     release_year: 1976,
//     formats: ["CD", "8T", "LP"]
//   }

// 93. Accessing Nested Objects

// const myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//     },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };

// const gloveBoxContents = myStorage.car.inside["glove box"];

// 94. Accessing Nested Arrays

// const myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];

// const secondTree = myPlants[1].list[1];

// 95. Record Collection

// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// function updateRecords(records, id, prop, value) {
//   if (prop !== 'tracks' && value !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
//     records[id][prop] = [value];
//   } else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   } else if (value === "") {
//     delete records[id][prop];
//   }
//   return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// 96. Iterate with JavaScript While Loops

// const myArray = [];

// let i = 5;

// while (i >= 0) {
//   myArray.push(i);
//   i--;
// }

// 97. Iterate with JavaScript For Loops

// const myArray = [];

// for (let i = 1; i < 6; i++ ) {
//   myArray.push(i);
// }

// 98. Iterate Odd Numbers With a For Loop

// const myArray = [];

// for (let i = 1; i < 10; i += 2) {
//   myArray.push(i);
// }

// 99. Count Backwards With a For Loop

// const myArray = [];

// for (let i = 9; i > 0; i -= 2) {
//   myArray.push(i);
// }

// 100. Iterate Through an Array with a For Loop

// const myArr = [2, 3, 4, 5, 6];

// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   total += myArr[i];
// }

// 101. Nesting For Loops

// function multiplyAll(arr) {
//   let product = 1;
//  for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//       product = product * arr[i][j];
//     }
//   }

//   return product;
// }

// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// 102. Iterate with JavaScript Do...While Loops

// const myArray = [];
// let i = 10;

//  do {
//   myArray.push(i);
//   i++;
// } while (i < 5)

// 103. Replace Loops using Recursion

// function sum(arr, n) {
//   if(n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
// }

// 104. Profile Lookup

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {

//  for (let x = 0; x < contacts.length; x++) {
//     if (contacts[x].firstName === name) {
//       if (contacts[x].hasOwnProperty(prop)) {
//         return contacts[x][prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }

// lookUpProfile("Akira", "likes");

// 105. Generate Random Fractions with JavaScript

// function randomFraction() {

// var result = 0;

//   while (result === 0) {
//     result = Math.random();
//   }
//   return result;
// }

// 106. Generate Random Whole Numbers with JavaScript

// function randomWholeNum() {

//   return Math.floor(Math.random() * 10);
// }

// 107. Generate Random Whole Numbers within a Range

// function randomRange(myMin, myMax) {
// return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
// return 0;
// }

// 108. Use the parseInt Function


// function convertToInteger(str) {
//   return parseInt(str);
// }

// convertToInteger("56");

// 109. Use the parseInt Function with a Radix

// function convertToInteger(str) {
//   return parseInt(str, 2);
// }
// convertToInteger("10011");

// 110. Use the Conditional (Ternary) Operator

// function checkEqual(a, b) {
//   return a === b ? "Equal" : "Not Equal";
// }

// checkEqual(1, 2);

// 111. Use Multiple Conditional (Ternary) Operators

// function checkSign(num) {
//   return num > 0 ? "positive"
//     : num < 0 ? "negative"
// 	  : "zero";
// }

// checkSign(10);

// 112. Use Recursion to Create a Countdown

//  function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const arr = countdown(n - 1);
//     arr.unshift(n);
//     return arr;
//   }
// }

// 113. Use Recursion to Create a Range of Numbers

// function rangeOfNumbers(startNum, endNum) {
//   if (endNum - startNum === 0) {
//     return [startNum];
//   } else {
//     var numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
// }