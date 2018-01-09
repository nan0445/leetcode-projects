/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (root===null) return;
    let res = [];
    helper(root);
    let i = 0;
    root.val = res[i];
    while (i<res.length-1) {
        i++;
        root.left = null;
        root.right = new TreeNode(res[i]);
        root = root.right;
    }
    
    function helper(root) {
        if (root===null) return;
        res.push(root.val);
        helper(root.left);
        helper(root.right);
    }
