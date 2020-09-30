/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0,
    max = 0
  for (let num of nums) {
    if (num) count++
    else {
      max = Math.max(max, count)
      count = 0
    }
  }
  return Math.max(max, count)
}
