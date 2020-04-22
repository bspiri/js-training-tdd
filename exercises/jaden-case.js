"use strict";

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
function jadenCase(str) {
  const str_array = str.split(" ");

  // for(i=0; i<str_array.length; i++){
  // str_array[i] = str_array[i].charAt(0).toUpperCase() + str_array[i].slice(1);
  // }

  const new_array = str_array.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return new_array.join(" ");
}
//* Begin of tests
const assert = require("assert");

assert.fail("You must write your own tests");
// End of tests */
