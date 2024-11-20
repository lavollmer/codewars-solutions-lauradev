# Unique in Solution 6kyu

## Question
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

Example:
`
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
`
## Thought Process Laura Dev

Breakdown of question:
1. Argument is a string or array
2. Returns an output of items without any elements with the same value next to each other or preserving original order
3. Based on example, it is case sensitive

First Initial Thought Process:
1. If a string, delete the doubles of characters (case sensitive), return an array of the separate characters
2. If an array of numbers, return an array of numbers removing double numbers
3. Edge cases? They don't give an example for zeros or special characters

Solution by Laura Dev:
1. Check the length of the iterable so that it is not zero, if it is return the empty array

2. Create a result variable to hold the first character in the array

3.Use a for loop to go through the array, if the index of the iterable doesn't equal the one prior then add it to the new result array. Key is to start at the second index in the for loop array.

4. Return the result

## Solution

```javascript
var uniqueInOrder=function(iterable){

    if (iterable.length === 0){
      return [];
    }
    
    let result = [iterable[0]];
    
    for (var i = 1; i < iterable.length; i++){
      
      if (iterable[i] !== iterable[i - 1]){
        result.push(iterable[i]);
      }
    }
  
    return result;
  }
  ```


## Key Learnings


1. Check for edge cases, in this one it would involve the array being empty
2. Use a for loop to check the indexed character prior to the current one and if they don't match, add to a new array
3. Start the new array with the current 1st character from the iterable variable