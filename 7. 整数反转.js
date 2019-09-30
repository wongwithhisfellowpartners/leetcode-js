/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = 0,
    flag = x > 0;
  // 避免正负问题，先把数据转成正整数再判断
  !flag && (x = -x);
  while (x) {
    // 假设数据不能超过-2**31~2**31-1
    if (x < 10) {
      if (result > 214748364) {
        return 0;
      }
      if (result === 214748364) {
        if (flag && x > 7) return 0;
        if (!flag && x > 8) return 0;
      }
    }

    result = result * 10 + (x % 10);
    x = ~~(x / 10);
  }
  return flag ? result : -result;
};
