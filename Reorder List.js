/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var count = 0;
    var temp = head;
    var pre = null;
    while (temp!==null) {
        count++;
        var current = new ListNode(temp.val);
        current.next = pre;
        pre = current;
        temp = temp.next;
    }
    var n = Math.floor(count/2);
    while (head!==null && head.next!==null && n>0) {
        var tt = head.next;
        head.next = pre;
        pre = pre.next;
        head = head.next;
        if (n>1) {
            head.next = tt;
            head = head.next;
        } else break;
        
        n--;
    }
    if (count%2===1) {
        if (head.next!==null) {
            head.next = tt;
            head.next.next = null;
        }
    } else {
        if (head!==null) head.next = null;
    }
};
