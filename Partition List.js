/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var h1 = new ListNode(0);
    var h2 = new ListNode(0);
    var p1 = h1, p2 = h2;
    
    while (head!==null) {
        if (head.val<x) {
            p1.next = new ListNode(head.val);
            p1 = p1.next;
        }
        else {
            p2.next = new ListNode(head.val);
            p2 = p2.next;
        }
        head = head.next;
    }
    p1.next = h2.next;
    return h1.next;
};
