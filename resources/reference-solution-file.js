// Problem: https://www.codewars.com/kata/two-sum
// Difficulty: Easy

/**
 * Find two numbers in an array that add up to a given target.
 * @param {number[]} nums - The array of numbers.
 * @param {number} target - The target sum.
 * @returns {number[]} - Indices of the two numbers that add up to target.
 */
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return []; // If no solution found
}

// Time Complexity: O(n), where n is the number of elements in the input array.
console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
