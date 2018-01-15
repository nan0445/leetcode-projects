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
var sumNumbers = function(root) {
    let res = [];
    let sum = "";
    helper(root);
    var count = 0;
    for (let i=0; i<res.length; i++) count += (res[i]-0);
    return count;
    function helper(root) {
        if (root===null) return;
        sum += root.val.toString();
        if (root.left===null && root.right===null) res.push(sum);
        helper(root.left);
        helper(root.right);
        sum = sum.slice(0,-1);
    }
};
