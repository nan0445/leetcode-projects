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
var findMode = function(root) {
    if (root === null) return [];
    p = null;
    
    count = 1;
    max = 0;
    var list = traverse(root, []);
    return list;
    
    function traverse(root, list) {
        
        if (root === null) return list;
        list = traverse(root.left, list);
        
        
        if (p !== null) {
            if (p === root.val) count++;
            else count = 1;
        }
        if (count>max) {
            max = count;
            list=[];
            list.push(root.val);
        } else if (count === max) {list.push(root.val);}
        p = root.val;
        list = traverse(root.right, list);
        return list;
        
    }
};
