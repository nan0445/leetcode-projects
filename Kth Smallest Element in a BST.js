/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res = [];
    helper(root,k);
    return res[k-1];
    function helper(root,k) {
        if (root===null) return;
        helper(root.left);
        if (res.length>=k) return;
        res.push(root.val);
        helper(root.right);
    }
};
