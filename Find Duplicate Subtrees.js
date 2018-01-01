/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let res = [];
    let map = {};
    helper(root);
    return res;
    
    function helper(root) {
        if (root===null) return " ";
        var temp = root.val.toString() + helper(root.left) + helper(root.right);
        if (map[temp]===undefined) map[temp]=1;
        else {
            if (map[temp]===1) res.push(root);
            map[temp]++;
        }
        return temp;
    }
};
