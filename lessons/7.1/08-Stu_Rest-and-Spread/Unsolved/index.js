/*
 * BONUS:
 * Q: If you have completed this activity, work through the following challenge with your partner to further your knowledge:
 *    What other data types can you use the spread operator or rest parameters on?
 * A: 
 */

// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// Which operator is being used here?
// This uses the 'spread' operator which copies (expands) the elements from the song array into newSongs
const newSongs = [...songs];

// What do you expect to be logged in the console?
// CJ: ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got']
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  /* 
   * What does the reduce() method do?
   * the reduce() method iterates through the elmenents of the calling array, performing the evaluation of a user defined
   *    callback function. It accumulates the value of the previous return value, and sends that accumulated value along with
   *    the next n+1 array value to the callback function (e.g. reduce(total, num) )
   */
  return array.reduce((a, b) => a + b, 0);
};
// What do you expect to be logged in the console?
// [6]
console.log(addition(1, 2, 3));

// What is this syntax that is being used as the parameter?
// CJ: all arguments passed to the function will be copied to an array (named array)
//     So for additionSpread(1, 2, 3), 'array' would be [1, 2, 3]
const additionSpread = (...array) => array.reduce((a, b) => a + b, 0);

// What do you expect to be logged in the console?
// CJ: [6]
console.log(additionSpread(1, 2, 3));

// What do you expect to be logged in the console?
// CJ: [110]
console.log(additionSpread(1, 2, 3, 4, 100));
