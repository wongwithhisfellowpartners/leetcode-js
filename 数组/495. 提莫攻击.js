/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (len === 0) return 0
  let sum = 0,
    len = timeSeries.length

  for (let i = 0; i < len - 1; i++) {
    sum += Math.min(duration, timeSeries[i + 1] - timeSeries[i])
  }
  return (sum += duration)
}
