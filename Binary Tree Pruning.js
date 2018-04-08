/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    var temp = new TreeNode(null);
    temp.left = root;
    
    helper(temp);
    return temp.left;
    
    function helper(temp) {
        if (temp.left===null && temp.right===null) {
            return;
        }
        if (temp.left!==null && temp.left.val===0) {
            if (temp.left.left===null && temp.left.right===null) temp.left = null;
        }
        if (temp.right!==null && temp.right.val===0) {
            if (temp.right.left===null && temp.right.right===null) temp.right = null;
        }
        
        if (temp.left!==null) {helper(temp.left);}
        
        if (temp.left!==null && temp.left.val===0) {
            if (temp.left.left===null && temp.left.right===null) temp.left = null;
        }
        if (temp.right!==null && temp.right.val===0) {
            if (temp.right.left===null && temp.right.right===null) temp.right = null;
        }
        
        if (temp.right!==null) {helper(temp.right);}
        
        if (temp.left!==null && temp.left.val===0) {
            if (temp.left.left===null && temp.left.right===null) temp.left = null;
        }
        if (temp.right!==null && temp.right.val===0) {
            if (temp.right.left===null && temp.right.right===null) temp.right = null;
        }
    }
};
