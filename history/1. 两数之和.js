/**
 * 循环数组， 然后在数组中找到target-当前元素的位置
 * 位置存在且不等于当前下标即可
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0, len = nums.length; i < len; i++) {
    let idx = nums.indexOf(target - nums[i]);
    if (idx !== i && idx !== -1) {
      return [i, idx];
    }
  }
};
