// Sort and the reverse method
const numbers = [1.22, 221.22, 2121, 33, 3.2];
const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

// Sorting numbers using comparator function to achieve the correct results
const sortedNumbersComparatorDriven = numbers.sort((numberOne, numberTwo) => {
  if (numberOne > numberTwo) {
    return 1;
  } else if (numberOne === numberTwo) {
    return 0;
  } else {
    return -1;
  }
});

console.log(sortedNumbersComparatorDriven);

console.log(sortedNumbersComparatorDriven.reverse());
