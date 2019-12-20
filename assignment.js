const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)


// 1 - Alert when # > 0.7
if (randomNumber >= 0.7) {
  alert(`Task 1: ${randomNumber} is greater than 0.7`);
} else {
  alert(`Task 1: ${randomNumber} is NOT greater than 0.7`);
}

// 2 - Two ways to loop through and output each value in an array
const numbersArray = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numbersArray.length; i++) {
  console.log(`Task 2a: ${numbersArray[i]}`);
}

for (const num of numbersArray) {
  console.log(`Task 2b: ${num}`);
}

var index = 0;
while (index < numbersArray.length) {
  console.log(`task 2c: ${numbersArray[index]}`);
  index = index + 1;
}

/* Can also do this with a 'do/while' loop */
// do {
//   console.log(`task 2c ${numbersArray[index]}`);
//   index = index + 1;
// } while (index < numbersArray.length);

//...

// 3 - Backwards through an array and output each value
for (let i = numbersArray.length - 1; i >= 0; i--) {
  console.log(`Task 3: ${numbersArray[i]}`);
}

// 4 - rnd1 && rnd2 > 0.7 || rnd1 < 0.2 || rnd2 < 0.2
const anotherRandomNumber = Math.random();

console.log(`randomNumber: ${randomNumber}`);
console.log(`anotherRandomNumber: ${anotherRandomNumber}`);

if (
  (randomNumber > 0.7 && anotherRandomNumber > 0.7) ||
  randomNumber < 0.2 || 
  anotherRandomNumber < 0.2
) {
  console.log(`Both random numbers are > 0.7, OR either random number < 0.2`);
}

// if (randomNumber > 0.7 && anotherRandomNumber > 0.7) {
//   alert(`Task 4: Both ${randomNumber} AND ${anotherRandomNumber} are greater than 0.7`);
// } else if (
//   randomNumber < 0.2 ||
//   anotherRandomNumber < 0.2
//   ) {
//     alert(`Task 4: Either ${randomNumber} OR ${anotherRandomNumber} are less than 0.2`);
//   }
