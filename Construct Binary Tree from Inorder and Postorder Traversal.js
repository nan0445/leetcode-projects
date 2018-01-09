/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (postorder.length===0) return null;
    postorder = postorder.reverse();
    inorder = inorder.reverse();
    var root = new TreeNode(postorder[0]);
    var cur = root;
    var s = [];
    for (let i=1, j=0; i<postorder.length; i++) {
        if (cur.val!==inorder[j]) {
            s.push(cur);
            cur.right = new TreeNode(postorder[i]);
            cur = cur.right;
        } else {
            j++;
            while (s.length!==0 && s[s.length-1].val===inorder[j]) {
                j++;
                cur = s.pop();
            }
            cur.left = new TreeNode(postorder[i]);
            cur = cur.left;
        }
    }
    return root;
};
