"use strict";

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
function whisper(str) {
  // str = "*" + str + "*";
  str = `*${str}*`;
  return str.toLowerCase();
}
//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof whisper, "function");
assert.strictEqual(whisper.length, 1);
assert.strictEqual(whisper("ALI"), "*ali*");

// End of tests */
