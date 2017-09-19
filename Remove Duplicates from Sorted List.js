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
var deleteDuplicates = function(head) {
    current = head;
    if (current === null || current === [] || current === undefined) {return [];}
    while (current.next != null && current.val != null) {
        if (current.val == current.next.val) {
            current.next = current.next.next;
        }else {
            current = current.next 
        }
    } 
    return head;
};
