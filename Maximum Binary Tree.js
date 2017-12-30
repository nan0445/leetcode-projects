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
var constructMaximumBinaryTree = function(nums) {
    function sortNumber(a,b) {return b-a;}
    let temp = nums.slice();
    temp.sort(sortNumber);
    let mid = nums.indexOf(temp[0]);
    let l = 0;
    let r = nums.length-1;
    let res = new TreeNode(temp[0]);
    helper(l,mid,r,nums,res);
    function helper(l,mid,r,nums,res){
        if (l<mid) {
            temp = nums.slice(l,mid);
            temp.sort(sortNumber);
            var new_mid = nums.indexOf(temp[0]);
            res.left = new TreeNode(temp[0]);
            helper(l,new_mid,mid-1,nums,res.left);
        }
        if (r>mid) {
            temp = nums.slice(mid+1,r+1);
            temp.sort(sortNumber);
            var new_mid = nums.indexOf(temp[0]);
            res.right = new TreeNode(temp[0]);
            helper(mid+1,new_mid,r,nums,res.right);
        }
    }
    return res;
    
};

///////////////////////////////
// dynamic searching the max node////
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
var constructMaximumBinaryTree = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    
    var root = new TreeNode(nums[0]);
    if (nums.length === 1) {
        return root;
    }
    
    for (var i = 1; i < nums.length; i++) {
        root = insert(nums[i], root);
    }
    
    return root;
};

function insert(num, root) {
    var node = new TreeNode(num);
    
    if (num > root.val) {
        node.left = root;
        return node;
    }
    
    var currRoot = root;
    var currRight = root.right;
    
    while (currRight && currRight.val > num) {
        currRoot = currRight;
        currRight = currRight.right;
    }
    
    currRoot.right = node;
    node.left = currRight;
    
    return root;
}
