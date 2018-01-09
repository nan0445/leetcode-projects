/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length===0) return null;
    var root = new TreeNode(preorder[0]);
    var cur = root;
    var s = [];
    for (let i=1, j=0; i<preorder.length; i++) {
        if (cur.val!==inorder[j]) {
            s.push(cur);
            cur.left = new TreeNode(preorder[i]);
            cur = cur.left;
            //return s[s.length-1].val
        } else {
            j++;
            while (s.length>0 && s[s.length-1].val===inorder[j]) {
                j++;
                cur = s.pop();
            }
            cur.right = new TreeNode(preorder[i]);
            cur = cur.right;
        }
    }
    return root;
};
