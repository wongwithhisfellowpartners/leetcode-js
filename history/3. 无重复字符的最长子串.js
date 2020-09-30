/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let str = '',
    max = 0
  for (let s1 of s) {
    if (str.includes(s1)) {
      str = str.split(s1)[1]
    }
    str += s1
    max = Math.max(max, str.length)
  }
  return max
}
