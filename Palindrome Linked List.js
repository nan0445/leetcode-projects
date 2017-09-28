/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var slow = head;
    var fast = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    slow = reverse(slow);
    while (slow !== null) {
        if (slow.val !== head.val) return false;
        slow = slow.next;
        head = head.next;
    }
    return true;
    
    function reverse(temp) {
        var left = null;
        while(temp){
            var right = temp.next;
            temp.next = left;
            left = temp;
            temp = right;
        }
        return left;
    }
};
