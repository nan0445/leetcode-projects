/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    if (t===null) return "";
    let res = "";
    helper(t, true);
    return res;
    function helper(t,flag) {
        if (flag) res= res.concat(t.val.toString()) + ((t.left===null && t.right===null)? "" : "(");
        else res= res.concat(")(")+t.val.toString() + ((t.left===null && t.right===null)? "" : "(");
        if (t.left!==null) helper(t.left,true);
        if (t.right!==null) helper(t.right,false);
        if (t.left!==null || t.right!==null)res= res.concat(")");
    }
};
