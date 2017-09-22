/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    return listTobst(head, null);
    
    function listTobst(head, tail) {
        if (head === tail) return null;
        var slow = head;
        var fast = head;
        while (fast != tail && fast.next != tail) {
            fast = fast.next.next;
            slow = slow.next;
        }
        var bst = new TreeNode(slow.val);
        bst.left = listTobst(head, slow);
        bst.right = listTobst(slow.next, tail);
        return bst;
    }
    
};
