# Unexpected String Concatenation in JavaScript

This example demonstrates a common error in JavaScript due to its loose typing system.  When adding a number and a string, JavaScript performs string concatenation instead of numerical addition.

## The Bug

The `foo` function is intended to add two numbers. However, if one of the inputs is a string, JavaScript will concatenate the values as strings.

## The Solution

The solution involves explicitly converting the inputs to numbers using `parseInt()` or `parseFloat()` before performing the addition to ensure numerical operation.

## How to reproduce:

1.  Clone this repository.
2.  Open `bug.js` and observe the unexpected output of the `foo` function.
3.  Open `bugSolution.js` to see the corrected version of the function that handles both numbers and strings.