/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root == null || (root.right == null && root.left == null)) return true
    let deepR = findDeep(root.right)
    let deepL = findDeep(root.left)
    let diff = Math.abs(deepR - deepL) <= 1
    return diff && isBalanced(root.left) && isBalanced(root.right)
};
// 找出二叉树的高度
var findDeep = function(root){
    if(root == null) return 0
    let max_deepR = findDeep(root.right)
    let max_deepL = findDeep(root.left)
    return Math.max(max_deepR, max_deepL) + 1
}

// very streight forward
// more tricky.........

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return rootheight(root) != -1;
    
    function rootheight(root) {
        if (root === null) return 0;
        var left = rootheight(root.left);
        if (left == -1) return -1;
        var right = rootheight(root.right);
        if (right == -1) return -1;
        
        if (Math.abs(left - right) > 1) return -1;
        return Math.max(left, right)+1;
    }
};
