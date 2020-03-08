// Filter method (Higher Order methods) - Not mutator gives a new array

// This filters the elements of an array based on a filtering criteria and can return more than
// one element that fits the criteria unlike the find and the findIndex methods which only
// returns back a single element which is the first matching element

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const filterCriteria = number => number > 5;

const numbersGreaterThan5 = nums.filter(filterCriteria);
console.log(numbersGreaterThan5);
