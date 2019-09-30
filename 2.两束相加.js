/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l3 = new ListNode(),
    cur = l3,
    num = 0;
  while (l1 || l2) {
    let sum = 0;
    if (l1) {
      sum += +l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += +l2.val;
      l2 = l2.next;
    }

    sum += num;

    if (sum >= 10) {
      cur.next = new ListNode(sum - 10);
      num = 1;
    } else {
      cur.next = new ListNode(sum);
      num = 0;
    }

    cur = cur.next;
  }

  if (num) {
    cur.next = new ListNode(1);
  }

  return l3.next;
};
