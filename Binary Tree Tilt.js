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
var findTilt = function(root) {
    var count = 0;
    var traverse = function(root){
        if(!root) return 0;
        var left = traverse(root.left);
        var right = traverse(root.right);
        count += Math.abs(left-right);
        return root.val + left + right;
    }
    traverse(root);
    return count;
};

/// Above is copied////////////////////
/// below is mine /////////////////////

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
var findTilt = function(root) {
    var tilt = [];
    tilt[0] = 0;
    helper (root, tilt);
    return tilt[0];
    
    function helper(root, tilt) {
        if (root === null) return 0;
        var left = helper(root.left, tilt);
        var right = helper(root.right, tilt);
        tilt[0] += Math.abs(left - right);
        return left+right+root.val;
    }
};



