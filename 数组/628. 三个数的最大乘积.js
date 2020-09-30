/**
 * @param {number[]} nums
 * @return {number}
 * 这是一个数学问题
 * 1. 将数组从大到小排序
 * 2. 最大的数的乘积只可能从最大的三个数，如果有负数，就是最大的数和俩最小的数中产生
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => b - a)
  let newArr = nums.slice(-2)
  return Math.max(nums[2] * nums[1] * nums[0], nums[0] * newArr[0] * newArr[1])
}
