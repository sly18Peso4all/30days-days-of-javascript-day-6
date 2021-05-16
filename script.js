//Exercises: Level 1
/*
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

1) Iterate 0 to 10 using for loop, do the same using while and do while loop

20 Iterate 10 to 0 using for loop, do the same using while and do while loop

3) Iterate 0 to n using for loop

4) Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######

4)    Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100

5) Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000

6) Use for loop to iterate from 0 to 100 and print only even numbers

7) Use for loop to iterate from 0 to 100 and print only odd numbers

8) Use for loop to iterate from 0 to 100 and print only prime numbers

9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.

The sum of all numbers from 0 to 100 is 5050.

10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
12) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

  [2550, 2500]

13) Develop a small script which generate array of 5 random numbers

14) Develop a small script which generate array of 5 random numbers and the numbers must be unique

15) Develop a small script which generate a six characters random id:

5j2khz

*/

// Solution 1
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// Solution 2
let a = 0;
do {
  console.log(a);
  a++;
} while (a < 5);

// Solution 4
for (let i = 0; i < 8; i++) {
  console.log(` ${"#".repeat(i + 1)}`);
}

// Solution 5
for (let c = 0; c <= 10; c++) {
  console.log(`${c} * ${c} = ${c * c}`);
}

// Solution 6
for (let d = 0; d <= 10; d++) {
  console.log(`${d}  ${d ** 2}   ${d ** 3}`);
}

// Solution 7
for (let e = 0; e < 100; e = e + 2) {
  console.log(e);
}

// Solution 8
for (let g = 1; g < 100; g += 2) {
  console.log(g);
}

// Solution 9
for (counter = 0; counter <= 100; counter = counter + 1) {
  testPrime = 0;
  for (testNum = 1; testNum <= 100; testNum = testNum + 1) {
    var testRes = counter % testNum;
    if (testRes === 0) {
      testPrime = testPrime + 1;
    }
  }
  if (testPrime === 2) {
    console.log(counter);
  }
}

// OR

function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

// Solution 10
let sum = 0;
for (let k = 0; k <= 100; k++) {
  sum = sum + k;
}
console.log(sum);

// Solution 11
let totalEven = 0;
for (let l = 0; l <= 100; l = l + 2) {
  totalEven += l;
}
console.log(totalEven);

// Solution 12
let totalOdd = 0;
for (let l = 1; l <= 100; l = l + 2) {
  totalOdd += l;
}
console.log(totalOdd);

// Solution 13
const randomNumber = Math.floor(Math.random() * 5 + 1);
console.log(randomNumber);

// Solution 15
let randomChar = Math.random().toString(16).slice(6, 12);
console.log(randomChar);

//Exercises: Level 2
/*
1)Develop a small script which generate any number of characters random id:

  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba

2) Write a script which generates a random hexadecimal number.

'#ee33df'

3) Write a script which generates a random rgb color number.

rgb(240,180,80)

4) Using the above countries array, create the following new array.

["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
 5) Using the above countries array, create an array for countries length'.

[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

6) Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]

7) In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

['Finland', 'Iceland']

8) In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

['Albania', 'Bolivia','Ethiopia']

9) Using the above countries array, find the country containing the biggest number of characters.

Ethiopia

10) Using the above countries array, find the country containing only 5 characters.

['Japan', 'Kenya']
11) Find the longest word in the webTechs array

12) Use the webTechs array to create the following array of arrays:

[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

13) An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

14) Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

15) This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

16) Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
*/

console.log("");
console.log("");
console.log("");
console.log("");
console.log("Exercise 2 Solution ================");
// Solution 1
let randomID = Math.random().toString(20).slice(2, 14);
console.log(randomID);

// Solution 2
let randomHexNum = Math.random().toString(16).slice(2, 8);
let hexaNum = `#${randomHexNum}`;
console.log(hexaNum);

// Solution 3
let max = 255;
let min = 0;

function generateRGB(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

let rgb = `rgb(${generateRGB(max, min)},${generateRGB(max, min)},${generateRGB(
  max,
  min
)})`;
console.log(rgb);

// Solution 4
let country = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];
let newCountry = country.slice();
console.log(newCountry);

// Solution 5
let countryArray = [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5];
let countryLength = countryArray.length;
console.log(countryLength);

// Solution 6
console.log("$$$$$$$$$$$$$$$$$$");
let countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

function checkArray(countries) {
  for (let cntry of countries) {
    let updatedCountry = `${
      cntry[0].toUpperCase() + cntry.slice(1).toLowerCase()
    }, ${cntry.slice(0, 3).toUpperCase()}, ${cntry.length}`;

    console.log(updatedCountry.split(" "));
  }
}

checkArray(countries);

// Solution 7
for (let cnt of countries) {
  if (cnt.includes("LAND")) {
    console.log(cnt);
  }
}

// Solution 8
for (let cnt of countries) {
  if (cnt.endsWith("IA")) {
    console.log(cnt);
  }
}

// Solution 9
function highestNumber(countries) {
  let newArr = [];
  for (let cnt of countries) {
    let cntLength = cnt.length;
    newArr.push(cntLength);
  }
  console.log(Math.max(...newArr), "************************");
}

highestNumber(countries);

// Solution 10
for (let cnt of countries) {
  if (cnt.length === 5) {
    console.log(cnt);
  }
}

// Solution 11
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
highestNumber(webTechs);

// Solution 12
checkArray(webTechs);

// Solution 13 /***REDO */
let stack = ["MongoDB", "Express", "React", "Node"];

for (const word of stack) {
  console.log(`${word[0]}`);
}

// Solution 14
const techs = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];
for (let tech of techs) {
  console.log(tech);
}

// Solution 15
const fruits = ["banana", "orange", "mango", "lemon"];
const reversedFruits = fruits.reverse();
console.log(reversedFruits);

// Solution 16
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

const joinedArray = fullStack.flatMap((stack) => stack);
console.log(joinedArray.join(", "));

console.log("");
console.log("");
console.log("");
console.log("");
console.log("Exercise 3 Solution ================");

// Solution
const copyCountries = countries.slice();
console.log(copyCountries);

// Solution 2
const sortedCountries = copyCountries.sort();
console.log(sortedCountries);

// Solution 3
const sortedWebTechs = webTechs.sort();
const sortedTech = techs.sort();
console.log(sortedTech);
console.log(sortedWebTechs);

// Solution 4
for (const country of countries) {
  if (country.includes("LAND")) {
    console.log(country);
  }
}
