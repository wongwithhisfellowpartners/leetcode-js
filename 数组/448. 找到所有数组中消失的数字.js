/**
 * @param {number[]} nums
 * @return {number[]}
 * 利用数组下标
 */
var findDisappearedNumbers = function (nums) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    let idx = Math.abs(nums[i]) - 1
    if (nums[idx] > 0) {
      nums[idx] *= -1
    }
  }
  let arr = []
  for (let i = 0; i < len; i++) {
    nums[i] > 0 && arr.push(i + 1)
  }
  return arr
}
