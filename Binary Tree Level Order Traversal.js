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
var levelOrder = function(root) {
    if (!root) return [];
    let ret = [];
    let queue = [root];
    while (queue.length > 0) {
        let level = [];
        let levelLen = queue.length;
        for (let i = 0;i < levelLen; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        ret.push(level);
    }
    return ret;
};

//    OR  !!!!!!!  my solution

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
var levelOrder = function(root) {
    var vals = [];
    addlist(vals, root, 0);
    return vals;
    
};

 var addlist = function(list, node, level) {
    if (node === null) return;
    if (list[level] === undefined) list[level] = [];
    addlist(list, node.left, level+1);
    addlist(list, node.right, level+1);
    list[level].push(node.val);
    
 };
