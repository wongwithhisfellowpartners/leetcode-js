/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => b - a)
  let len = citations.length
  for (let i = 0; i < len; i++) {
    if (i + 1 > citations[i]) {
      return Math.min(i, citations[i - 1] || 0)
    }
  }
  return len
}
