/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let len = nums.length
  // 处理所有负数和0
  for (let i = 0; i < len; i++) {
    if (nums[i] <= 0) {
      nums[i] = len + 1
    }
  }

  // 将正数对应的下标的数变成负数
  for (let i = 0; i < len; i++) {
    let idx = Math.abs(nums[i])
    if (idx <= len && nums[idx - 1] > 0) {
      nums[idx - 1] *= -1
    }
  }

  // 第一个不是负数的下标的数就是要找的数
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      return i + 1
    }
  }

  // 所有下标对应都有值，就是数组的长度

  return len + 1
}
