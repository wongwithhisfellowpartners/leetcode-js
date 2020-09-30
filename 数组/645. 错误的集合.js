/**
 * @param {number[]} nums
 * @return {number[]}
 * 这也是一个数学问题
 * 重复的数等于原数组的和减去去重后数组的和
 * 缺失的数等于正常数组的和减去去重后缺失数组的和
 * 正常数组的和计算公式n+(n-1)+(n-2)+...+1 这里是一个高斯求和1+2+3+...+n = (1+n)*n /2
 */
var findErrorNums = function (nums) {
  let sum1 = nums.reduce((a, b) => a + b, 0)
  let sum2 = [...new Set(nums)].reduce((a, b) => a + b, 0)
  let sum3 = ((nums.length + 1) * nums.length) / 2
  return [sum1 - sum2, sum3 - sum2]
}
