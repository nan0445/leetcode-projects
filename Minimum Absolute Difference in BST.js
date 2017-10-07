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
var getMinimumDifference = function(root) {
    function helper(root, value) {
        if (root === null) return;
        value.push(root.val);
        helper(root.left, value);
        helper(root.right, value);
    }
    
    function sortNumber(a, b) {
        return b-a;
    }
    
    var value = [];
    helper(root, value);
    value.sort(sortNumber);
    var mindiff = Number.MAX_VALUE;
    for (i=1; i<value.length; i++) {
        mindiff = Math.min(mindiff, value[i-1]-value[i]);
    }
    return mindiff;
};Minimum Absolute Difference in BST
