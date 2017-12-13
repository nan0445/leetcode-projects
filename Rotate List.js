/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head===null || head.next===null) return head;
    var temp = new ListNode(head.val);
    temp.next = head.next;
    var count = 1;
    var flag = false;
    var newhead = new ListNode();
    while(true) {
        if (temp.next===null) {
            temp.next = head;
            var len = count;
            var l = len - k % len;
            flag = true;
        }
        if (flag) {
            if (l===0) {
                newhead.val = temp.next.val;
                newhead.next = temp.next.next;
                temp.next = null;
                break;
            }
            l--;
        }
        temp = temp.next;
        count++;
    }
    return newhead;
    
    
};
