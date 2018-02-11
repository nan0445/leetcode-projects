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
var minDiffInBST = function(root) {
    let minV = Number.MAX_VALUE;
    let temp = [];
    function helper(root) {
        if (root===null) return;
        helper(root.left);
        temp.push(root.val);
        helper(root.right);
        
    }
    helper(root);
    for (let i=1; i<temp.length; i++) {
        minV = Math.min(minV, temp[i]-temp[i-1]);
    }
    return minV;
};
