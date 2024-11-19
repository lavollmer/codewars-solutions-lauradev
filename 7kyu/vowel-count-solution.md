# Vowel Count

## Question
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


## Thought Process Laura Dev

1. Base input = only will be lower case letters or spaces. Do not need to worry about edge cases with upper case or unique symbols.
2. Consider the vowels of "a,e,i,o,u" for this kata
3. Final output is to return the NUMBER of vowels in the string
4. I want to create a loop that adds to a count variable outside the loop
5. Return the total count value of the variable

## Solution

I first began by creating a variable called totalCount and set its value equal to zero.

Next, I created a for loop to run through each character in the string to check for the vowels. Each loop run, the character would be strictly equalled to the vowel string character using if statements. Everytime it would make a match to the if statement, the totalCount would increase by 1. At the end of the function, I returned the variable containing the totalCount.

```javascript
function getCount(str) {
  var totalCount = 0;
  
  for (var i = 0; i < str.length;i++){
    if (str[i] === "a") {
      totalCount += 1;
    } else if (str[i] === "e"){
      totalCount += 1;
    } else if (str[i] === "i"){
      totalCount += 1;
    } else if (str[i] === "o"){
      totalCount += 1;
    } else if (str[i] === "u"){
      totalCount+=1;
    }
  }
  
  return totalCount;
}
```

## Key Learnings


