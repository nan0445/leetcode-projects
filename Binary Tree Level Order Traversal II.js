/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var vals = [];
    addlist(vals, root, 0);
    return vals.reverse();
    
    
    
};
 var addlist = function(list, node, level) {
    if (node === null) return;
    if (list[level] === undefined) list[level] = [];
    addlist(list, node.left, level+1);
    addlist(list, node.right, level+1);
    list[level].push(node.val);
    
 };
