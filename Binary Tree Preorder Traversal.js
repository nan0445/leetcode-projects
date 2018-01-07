/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let res = [];
    helper(root);
    return res;
    function helper(root) {
        if (root===null) return;
        res.push(root.val);
        helper(root.left);
        helper(root.right);
    }
};

///////////////////////////////
/// or use stack///////////////
////////////////////////////////
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const stack = [];
    stack.push(root);

    const traversal = [];

    while (stack.length){
        const node = stack.pop();
        
        if (!node){
            continue;
        }

        traversal.push(node.val);

        stack.push(node.right);
        stack.push(node.left);
    }

    return traversal;
};
