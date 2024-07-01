/*
169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109

 
Follow-up: Could you solve the problem in linear time and in O(1) space?

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 function majorityElement(nums) {
  // Инициализируем счетчик и предполагаемый мажоритарный элемент
  // Initialize counter and assumed majority element
  let count = 0, candidate = null;

  // Проходим по массиву
  // Iterate over the array
  for (let num of nums) {
      // Если счетчик равен нулю, устанавливаем текущий элемент как кандидата
      // If the counter is zero, set the current element as the candidate
      if (count === 0) {
          candidate = num;
      }
      // Если текущий элемент равен кандидату, увеличиваем счетчик, иначе уменьшаем его
      // If the current element is equal to the candidate, increment the counter, otherwise decrement it
      count += (num === candidate) ? 1 : -1;
  }

  // Возвращаем мажоритарный элемент
  // Return the majority element
  return candidate;
}