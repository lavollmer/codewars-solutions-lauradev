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

Thought Process:
1. If a string, delete the doubles of characters (case sensitive), return an array of the separate characters
2. If an array of numbers, return an array of numbers removing double numbers
3. Edge cases? They don't give an example for zeros or special characters

## Solution



## Key Learnings


