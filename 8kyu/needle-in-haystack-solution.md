# Needle in Haystack 8kyu

## Question

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

`["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"`


## Thought Process Laura Dev

1. Input is an array
2. End output is to return a string "found the needle at position" with index in array
3. Create a for loop that checks for the string with the word "needle" - use the for loop [i] position to return in the return statement

## Solution

```javascript
function findNeedle(haystack) {
  // your code here
  
  for (var i = 0; i < haystack.length; i++){
    if (haystack[i] === "needle"){
      return "found the needle at position " + i;
    }
  }
}
```

Another solution I saw after submission involved using the `indexOf()` method with an array. In this scenario you would find the first instance of "needle" in the haystack array.

```javascript
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
```

## Key Learnings

The biggest thing I learned from this problem was that to return the index of the array, I only needed to state variable i. Additionally, I was able to add it in the string because strings use type coercion with numbers.

The second thing I learned was the method of `.indexOf()` with an array using the string.
