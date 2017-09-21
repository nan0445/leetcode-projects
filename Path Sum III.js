/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */

var pathSum = function(root, sum) {
    if (root === null) return 0;
    return detectSum(root, sum, 0) + pathSum(root.left,sum) + pathSum(root.right,sum);
    
    
};

var detectSum = function(node, val, pre) {
    if (node === null) return 0;
    var current = pre + node.val;
    return (current === val) + detectSum(node.left, val, current) + detectSum(node.right, val, current); 
    
};
