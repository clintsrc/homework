/*
 *
 * BONUS:
 *
 * Q: What is a ternary operator?
 * A: a ternary operator is a single statement used to test a condition and 
 *    respond in one of two ways.
 *    The test condition is given prior to a '?'
 *    If the test is True, the statement following the '?' executes, up to the ':'
 *    Otherwise the test is False, and the statement following the ':' executes
 */


// Q: What are we importing?
// A: the filesystem object from the js standard library
import fs from 'fs';

// Add comments to explain each of the three arguments of appendFile()
/*
 * appendFile(
 *    file: the path to the file that is to be updated. If it doesn't already exist it will be created
 *       In this case, write to the same directory as the script to the file 'log.txt'
 *    data: the data (text) to be added to the file
 *       In this case, the first command line parameter given to the script, and a carriage return
 *    callback with an errorlevel parameter, err: the callback function to use depending on the error level returned:
 *       The callback in this example is a single ternary statement:
 *          if an error is returned, display that error in the console
 *          if the errorlevel indicates success, the console message shows a commit was logged
 * )
 */
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // Describe how this ternary operator works
  /*
   * test a condition: in this case the errorlevel err is True or False
   *    If the test is True, the statement following the '?' executes, up to the ':'
   *       In this case the errorlevel is logged to the console
   *    Otherwise the test is False, and the statement following the ':' executes
   *       In this case the message 'Commit logged!' is logged to the console
   */

  err ? console.error(err) : console.log('Commit logged!')
);
