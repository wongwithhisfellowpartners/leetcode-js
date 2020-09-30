/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let MAX_ONE = -Infinity,
    MAX_TWO = -Infinity,
    MAX_THREE = -Infinity
  for (let num of nums) {
    if (num > MAX_ONE) {
      ;[MAX_ONE, MAX_TWO, MAX_THREE] = [num, MAX_ONE, MAX_TWO]
    } else if (num > MAX_TWO && num !== MAX_ONE) {
      ;[MAX_TWO, MAX_THREE] = [num, MAX_TWO]
    } else if (num > MAX_THREE && num !== MAX_ONE && num !== MAX_TWO) {
      MAX_THREE = num
    }
  }
  return MAX_THREE === -Infinity ? MAX_ONE : MAX_THREE
}
