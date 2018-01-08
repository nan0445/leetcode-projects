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
var findBottomLeftValue = function(root) {
    if (root===null) return null;
    let l = 0;
    let max = -1;
    let res = 0;
    helper(root);
    return res;
    function helper(root) {
        if (root===null) return;
        else {
            if (max<l) {
                max = l;
                res = root.val;
            }
        }
        l++;
        helper(root.left);
        helper(root.right);
        l--;
    }
};
