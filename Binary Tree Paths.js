/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (root===null) return [];
    let temp = "";
    let res = [];
    helper(temp, root);
    function helper(temp, root) {
        if (root===null) return;
        if (temp.length===0) temp = temp.concat(root.val.toString());
        else temp = temp.concat("->").concat(root.val.toString());
        if (root.left===null && root.right===null) res.push(temp);
        helper(temp, root.left);
        helper(temp, root.right);
    }
    return res;
};
