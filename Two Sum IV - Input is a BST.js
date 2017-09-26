/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    var list = [];
    addlist(root, list);
    
    function addlist(root, list) {
        
        if (root===null) return;
        addlist(root.left, list);
        list.push(root.val);
        addlist(root.right, list);
        
    }
    var l = 0, r = list.length-1;
    while (l<r) {
        var sum = list[l] + list[r];
        if (sum===k) return true;
        if (sum<k) l++;
        if (sum>k) r--;
    }
    return false;
};
