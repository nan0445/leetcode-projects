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
var largestValues = function(root) {
    if (root===null) return [];
    var temp = [];
    var count=0;
    temp[0]=-Number.MAX_VALUE;
    helper(root, count);
    return temp;
    
    function helper(root,count) {
        if (root===null) return;
        if (temp[count]===undefined) temp[count]=-Number.MAX_VALUE;
        temp[count]=Math.max(temp[count],root.val);
        helper(root.left, count+1);
        helper(root.right, count+1);
        count--;
    }
};
