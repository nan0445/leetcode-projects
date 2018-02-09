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
var diameterOfBinaryTree = function(root) {
    if (root===null) return 0;
    let maxlen = 0;
    function helper(root) {
        if (root===null) return 0;
        var L = helper(root.left)+1;
        var R = helper(root.right)+1;
        maxlen = Math.max(maxlen, L+R);
        return Math.max(L,R);
    } 
    helper(root);
    return maxlen-2;
};
