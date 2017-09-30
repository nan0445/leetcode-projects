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
var findSecondMinimumValue = function(root) {
    if (root === null) return -1;
    var min = helper(root, []);
    
    function helper(root, min) {
    if (root.left === null) return min;
    if (root.left !== null) {
        if (root.left.val !== root.val) {
            min.push(root.left.val);
            helper(root.right, min);
        }
        else if (root.right.val !== root.val) {
            min.push(root.right.val);
            helper(root.left, min);
        }
        else if (root.right.val === root.left.val) {
            helper(root.right, min);
            helper(root.left, min);
        }
    }
        return min;
    }
    
    function sortNumber(a,b)
    {
        return a - b
    }
    
    if (min.length<1) return -1;
    min = min.sort(sortNumber);
    return min[0];
};
