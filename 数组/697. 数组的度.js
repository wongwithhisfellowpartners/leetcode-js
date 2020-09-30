/**
 * @param {number[]} nums
 * @return {number}
 * 1. 先找出重复次数最大的数
 * 2. 再找出这些数里面距离最短的
 */
var findShortestSubArray = function (nums) {
  let map = {},
    max = 0
  for (let num of nums) {
    if (!map[num]) map[num] = 1
    else map[num]++
    max = Math.max(max, map[num])
  }

  let len = nums.length,
    temp = {}
  for (let e in map) {
    if (map[e] === max && !temp[e]) {
      len = Math.min(len, nums.lastIndexOf(+e) - nums.indexOf(+e) + 1)
      temp[e] = true
    }
  }
  return len
}
