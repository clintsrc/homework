const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition.
// The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
const doubledArray = originalArray.map((data) => data * 2);

console.log(doubledArray);
console.log(originalArray);

// Describe how map is working in the example below. What will the value of tripledArray be?
// CJ: This map callback will multiply each element of the original array by 3
// [3, 9, 6, 15, 30]
const tripledArray = originalArray.map((data) => data * 3);
// console.log(tripledArray);

// Describe how map is working in the example below. What will the value of oddOrEven be?
// CJ: map() applies a user-defined callback function that is applied to each consecutive array element
// ['odd', odd, even, odd, even]
const oddOrEven = originalArray.map((num) => {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});
// console.log(oddOrEven);