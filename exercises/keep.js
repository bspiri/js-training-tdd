"use strict";

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst(input) {
  return input.slice(0, 2);
}
function keepLast(input) {
  return input.slice(-2);
}
function keepFirstLast(input) {
  return input.substring(2, 4);
}

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof keepFirst, "function");
assert.strictEqual(keepFirst.length, 1);
assert.strictEqual(keepLast.length, 1);
assert.strictEqual(keepFirstLast.length, 1);
assert.strictEqual(keepFirst("wilder"), "wi");
assert.strictEqual(keepLast("wilder"), "er");
assert.strictEqual(keepFirstLast("wilder"), "ld");

// End of tests */
