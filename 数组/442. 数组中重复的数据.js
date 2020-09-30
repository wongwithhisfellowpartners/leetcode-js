/**
 * @param {number[]} nums
 * @return {number[]}
 * 利用数组下标
 * 把数组中的元素的值对应的下标的值变成负数，如果对应下标的值已经是负数了，说明这个数已经出现过了
 */
var findDuplicates = function (nums) {
  let arr = []
  for (let i = 0, len = nums.length; i < len; i++) {
    let idx = Math.abs(nums[i]) - 1
    if (nums[idx] < 0) {
      arr.push(idx + 1)
    } else {
      nums[idx] *= -1
    }
  }
  return arr
}
