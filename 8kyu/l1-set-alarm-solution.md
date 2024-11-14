# L1: Set Alarm

## Question

Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. 

## Thought Process Laura Dev

1. Have two parameters/inputs - employed and vacation
2. Return true if you are employed and not on vacation
3. Return false otherwise
    - On vacation, employed
    - On vacation, not employed
    - Not on vacation, not employed

## Solution

Create a return statement that includes the only logical TRUE statement based on the question. Because you only return this, than everything else will return FALSE. 

## Key Learnings

There were a couple ways to solve this problem. Another way would be to use an arrow function with a single expression and no return statement. 

Example:
`const alarm = (employed, vacation) => !vacation && employed;`

The above is considered an arrow function with implicit return. This means that the arrow function has two parameters in the body of the code, an arrow, then the expression to return. The code will automatically return the outcome without a return statement. Arrow functions are usually assigned to the variable `const` in order for developers to predict its outcome, prevents mutations and reassignment accidentals. 
