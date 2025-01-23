function foo(a, b) {
  // Convert inputs to numbers before adding
  a = parseInt(a, 10);
  b = parseInt(b, 10);

  // Check if both are valid numbers before adding 
  if (!isNaN(a) && !isNaN(b)) { 
    return a + b; 
  } else { 
    return 'Invalid Input'; //Handle invalid inputs
  }
}

console.log(foo(1, '1')); // Output: 2
console.log(foo('abc', 1)); //Output: Invalid Input