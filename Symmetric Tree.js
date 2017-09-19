/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
    
    var isMirror = function(r1, r2) {
        if (r1 === null && r2 === null) return true;
        if (r1 === null || r2 === null) return false;
        if (r1.val === r2.val) {
            return isMirror(r1.right, r2.left) && isMirror(r1.left, r2.right);
        }
        else return false;
    }
    
    return isMirror(root, root);
};
