/**
 * @param {number[]} nums
 * @return {number}
 * n -1 个元素每次加一 等同于 1个元素每次减一
 * 所以题目等同于每次一个元素减一 多少次所有元素相等
 */
var minMoves = function (nums) {
  let min = Math.min(...nums),
    sum = nums.reduce((a, b) => a + b, 0),
    len = nums.length
  return sum - min * len
}
