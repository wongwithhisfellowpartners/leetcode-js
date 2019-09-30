/**
 * 常规解法
 * 遍历第一个元素, 找第一个元素里面的子元素是不是其他元素的开头
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';
  if (strs.length === 1) return strs[0];
  let str = '';
  for (let i = 1, len = strs[0].length; i <= len; i++) {
    let s = strs[0].substring(0, i);
    for (let j = 1, lenj = strs.length; j < lenj; j++) {
      if (!strs[j].startsWith(s)) {
        return str;
      }
    }
    str = s;
  }
  return str;
};
