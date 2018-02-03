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
var countNodes = function(root) {
    var l = leftnode(root);
    var r = rightnode(root);
    if (l===r) return Math.pow(2,l)-1;
    else return countNodes(root.left)+countNodes(root.right)+1;
    
    function leftnode(root) {
        let n = 0;
        while (root!==null) {
            n++;
            root = root.left;
        }
        return n;
    }
    function rightnode(root) {
        let n = 0;
        while (root!==null) {
            n++;
            root = root.right;
        }
        return n;
    }
};
