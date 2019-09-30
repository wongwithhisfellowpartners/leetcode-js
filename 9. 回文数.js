/**
 * 将x反转得到的结果和x原来比
 * 负数永远是false
 * 个位数永远是true
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  if (x < 10) return true;
  let y = 0,
    z = x;
  while (x) {
    y = y * 10 + (x % 10);
    x = ~~(x / 10);
  }
  return z === y;
};
