/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var tt = helper(head, n);
    var count = 0;
    if (tt === n) head = head.next;
    return head;
    
    function helper(head, n) {
        if (head === null) return 0;
        count++;
        var t = helper(head.next, n)+1;
        if (t === n+1) head.next = head.next.next;
        return t;
    }
};
