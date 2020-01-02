const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1a
const filteredNumbers = numbers.filter(num => num > 5);
console.log(filteredNumbers);

// 1b !!!
const mappedObject = {};
const mappedNumbers = numbers.map(num => {
  mappedObject.number = num;
});
console.log(mappedObject);

// 1c !!!
const multipliedNumbers = numbers.reduce(num => {
  let newNum = newNum*num;
});
console.log(multipliedNumbers);


// 2 !!!
const findMax = (...numbers) => {
  // Find the max number
  const maxNumber = numbers.map(num => {

  });
  console.log(maxNumber);
};

findMax(numbers);


// 3 !!!
const findMinMax = (...numbers) => {
  const [minNumber, maxNumber] = numbers.map(num => {

  });
  console.log(minNumber, maxNumber);
};

findMinMax(numbers);


// 4 !!!
const noDuplicateValues = (...newList) => {
  const filterDuplicates = newList.filter((n) => {});
  console.log(filterDuplicates);
};

const newList = [1, 2, 2, 3, 4, 5, 6, 6, 7, 9, 8, 8];

noDuplicateValues(newList);