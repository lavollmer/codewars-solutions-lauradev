# Binary Addition

## Problem Description
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

## Thought Process Laura Dev

1. Change the string data types to a number
2. Add the numbers to find the sum
3. Change the sum of the two numbers to the binary representation

## Solution

``` javascript
 function binary (a,b) {
    var numA = Number(a);
    var numB = Number(b);

    var sum = numA + numB;

    return sum.toString(2);
 }
 ```

## Key Learnings

I learned several key learnings in this problem. The first being changing a number data type into binary representation. In order to change it to binary representation, I would use the Number.toString(2) method. This method takes the number decimal using a base of 2 (binary representation). Binary representation is a series of 0s and 1s to represent numbers.

There was another way to solve this problem:

```javascript
function addBinary(a,b){
    return (a+b).toString(2);
}
```

The above takes the two input arguments. It uses the operator `+` to perform a regular arithmetic addition if `a` and `b` are numbers. If `a` and `b` are strings, they will be concatenated. As my solution above, the answer uses `.toString(2)` method on the result which converts the number to a binary string. `2` is the radix (base), which specifies the number should be represented in base 2 (binary). 

Another thing I learned outside of the problem was that in markdown language to display a block scope code block - you must use triple backticks with the word javascript above it.


