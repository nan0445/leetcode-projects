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
var insertionSortList = function(head) {
     var dummy = new ListNode(0);
     var prev = dummy;

     while (head != null) {
        var temp = head.next;
        if (prev.val >= head.val) prev = dummy;
        while (prev.next != null && prev.next.val < head.val) {
            prev = prev.next;
        }
        head.next = prev.next;
        prev.next = head;
        head = temp;
    }
    return dummy.next;
};
