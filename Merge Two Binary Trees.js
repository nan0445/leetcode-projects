/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (t1===null) return t2;
    else if (t2 === null) return t1;
    var t = new TreeNode(t1.val+t2.val);
    return helper(t1, t2, t);
    
    function helper(t1, t2, t) {
        if (t1===null) return t2;
        else if (t2 === null) return t1;
        t = new TreeNode(t1.val+t2.val);
        t.left = helper (t1.left, t2.left, t.left);
        t.right = helper (t1.right, t2.right, t.right);
        return t;
    }
};

////////////////////////////////////////////
/////////// more concise///////////////////

var mergeTrees = function(t1, t2) {
    if (t1 === null) return t2
    if (t2 === null) return t1
    var mergedTree = new TreeNode(t1.val + t2.val)
    mergedTree.left = mergeTrees(t1.left, t2.left)
    mergedTree.right = mergeTrees(t1.right, t2.right)
    return mergedTree
};
