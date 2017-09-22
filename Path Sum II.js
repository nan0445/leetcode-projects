/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
        
    var result = [];
    //var currentresult = [];
    
    addpath(root, sum, result, []);
    return result;
    
    
    function addpath(root, sum, result, currentresult) {
        if (root === null) return;
        currentresult.push(root.val);
        if (root.right === null && root.left === null && root.val === sum) {
            result.push(currentresult);
            //currentresult.pop();
            return;
        } else {
            addpath(root.left, sum-root.val, result, currentresult.slice());
            addpath(root.right, sum-root.val, result, currentresult.slice());
        }
       // currentresult.pop();
    }

};

