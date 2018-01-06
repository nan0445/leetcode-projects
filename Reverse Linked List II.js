/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var temp = new ListNode(0);
    temp.next = head;
    var nh = temp;
    var count = 1;
    while (head!==null) {
        if (m===count) {
            var pre = new ListNode(head.val);
            var te = pre;
        } else if (count>m && count<n) {
            var curr = new ListNode(head.val);
            curr.next = pre;
            pre = curr;
        } else if (count === n) {
            var curr = new ListNode(head.val);
            curr.next = pre;
            pre = curr;
            temp.next = pre;
            te.next = head.next;
            break;
        }
        if (count<m) temp = temp.next;
        count++;
        head = head.next;
        
    }
    return nh.next;
};
