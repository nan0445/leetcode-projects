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
var zigzagLevelOrder = function(root) {
    
    let res = [];
    let count = 0;
    helper(root);
    for (let i=0; i<res.length; i++) {
        if (i%2===1) res[i] = res[i].reverse();
    }
    return res;
    
    function helper(root) {
        if (root===null) return;
        if (res[count]===undefined) {res[count] = new Array(); res[count].push(root.val);}
        else res[count].push(root.val);
        count++;
        helper(root.left);
        helper(root.right);
        count--;
    }
};
