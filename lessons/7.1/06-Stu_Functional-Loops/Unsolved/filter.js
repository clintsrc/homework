/*
 * BONUS:
 * Q: If you have completed this activity, work through the following challenge with your partner to further your knowledge:
 *    What is the reduce() array method?
 * A: the reduce() method iterates through the elmenents of the calling array, performing the evaluation of a user defined
 *    callback function. It accumulates the value of the previous return value, and sends that accumulated value along with
 *    the next n+1 array value to the callback function (e.g. reduce(total, num) )
 *    (ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
 */



const originalArray = [1, 3, 2, 5, 10];

// evenNumbers is equal to a new array of even numbers returned by filter(). filter() will use an anonymous function as a condition.
// CJ: filter() creates a new array and adds the elements that pass the test defined in the anonymous function
const evenNumbers = originalArray.filter((data) => {
  // The anonymous function uses a conditional to check if a number is divisible by 2.
  if (data % 2 === 0) {
    // If a number is even (divisible by 2), the condition returns true.
    return true;
  }
});

// CJ: Show the new array that filters created to store only the even numbers from the originalArray
console.log(evenNumbers);
// CJ: Show the originalArray so that you can visually compare the contents of both arrays
console.log(originalArray);

const isPrime = (num) => {
  // Set up a loop the starts with 2 and continues to increment i as long as i is less than 2
  for (let i = 2; i < num; i++) {  // ignore 1, skip to 2
    // isPrime will return false if num is divisible by any number other than 1 or num.
    if (num % i === 0) return false;
  }
  // Otherwise, isPrime will return num, unless num == 1.
  return num !== 1;
};

// Describe how filter is working in this example. What will the value of primeArray be?
// CJ: Filter calls the isPrime anonymous function which only returns true for each 
//     element in originalArray is a prime number. Each element that evaluates to true is added to an
//     array that filter() creates internally. That array is returned from the filter() method
// This means primeArray will be: [3,2,5]
const primeArray = originalArray.filter(isPrime);
// console.log(primeArray);

// Describe how filter is working in this example. What will the value of moreThan5Array be?
// CJ: filter() tests each element of originalArray on whether it is more than 5, and will return an
//    an array from the method that contains only those values
// This means moreThan5Array will be: [10]
const moreThan5Array = originalArray.filter((num) => num > 5);
// console.log(moreThan5Array);