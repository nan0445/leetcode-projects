/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head===null || head.next===null) return head;
    var s=head.next;
    head.next = swapPairs(head.next.next);
    s.next = head;
    return s;
    
    
};
