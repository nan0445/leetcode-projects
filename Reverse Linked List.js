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
var reverseList = function(head) {
    var left = null;
    while(head){
        var right = head.next;
        head.next = left;
        left = head;
        head = right;
    }
    return left;
};
