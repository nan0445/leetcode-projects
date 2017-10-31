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
var rob = function(root) {
    var num = helper(root);
    return Math.max(num[0], num[1]);
    
    function helper(root) {
        if (root===null) return [0, 0];
        var left = helper(root.left);
        var right = helper(root.right);
        var res = [0, 0];
        res[0] = left[1] + right[1] + root.val;
        res[1] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        return res;
    }
    
};
