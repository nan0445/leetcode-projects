/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    
    var maxlen = 0;
    helper(root);
    return maxlen;
    
    function helper(root) {
        if (root === null) return 0;
        var left = helper(root.left);
        var right = helper(root.right);
        var llen = 0, rlen = 0;
        if (root.left !== null && root.val === root.left.val) {
            llen = left + 1;
        }
        if (root.right !== null && root.val === root.right.val) {
            rlen = right + 1;
        }
        maxlen = Math.max(maxlen, llen+rlen);
        return Math.max(llen, rlen);
    }
};
