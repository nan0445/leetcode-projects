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
var sumOfLeftLeaves = function(root) {
    var result = 0;
    sumleft(root);
    return result;
    
    function sumleft(root) {
        if (root === null) return;
        if (root.left !== null && root.left.left === null && root.left.right === null) {
            result += root.left.val;
            
        }
        sumleft(root.left);
        sumleft(root.right);
        
    }
    
};
