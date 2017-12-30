/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
    if (d===1) {
        var res = new TreeNode(v);
        res.left = root;
        return res;
    }
    var count = 1;
    helper(root, v, d, count);
    function  helper(root, v, d, count) {
        if (count===d || root===null) return;
        if (count===d-1) {
            var tempL = root.left;
            var tempR = root.right;
            var l = new TreeNode(v), r = new TreeNode(v);
            root.left = l, root.right = r;
            l.left = tempL, r.right = tempR;
            return;
        }
        
        helper(root.left, v, d, count+1);
        helper(root.right, v, d, count+1);
        
    }
    return root;
};
