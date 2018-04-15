/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
    let flag = false;
    let count = 0;
    helper(head);
    return count;
    function helper(node) {
        if (node===null) {
            if (flag) count++;
            return;
        }
        if (G.indexOf(node.val)!==-1) {
            if (!flag) {
                flag = true;
            }
        } else {
            if (flag) {
                count++;
                flag = false;
            }
        }
        helper(node.next);
    }
};
