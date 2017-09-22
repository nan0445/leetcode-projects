/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    return addnode(nums, 0, nums.length);
        
    function addnode(nums, start, end) {
        if (start >= end) return null;
        var mid = Math.floor((start+end)/2);
        var root = new TreeNode(nums[mid]);
        root.left = addnode(nums, start, mid);
        root.right = addnode(nums, mid+1, end);
        return root;
        
    }
};
