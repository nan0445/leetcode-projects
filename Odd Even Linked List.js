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
var oddEvenList = function(head) {
    if (head === null || head.next === null) return head;
    var ev = head.next, odd = head, ev_t = head.next;
    while (ev !== null && ev.next !== null && head !== null && head.next !== null) {
        head.next = ev.next;
        head = head.next;
        ev.next = head.next;
        ev = ev.next;
    }
    head.next = ev_t;
    return odd;
};
