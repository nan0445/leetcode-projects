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
var convertBST = function(root) {
    let temp = [];
    let sum = 0;
    function helper(root) {
        if (root===null) return;
        temp.push(root.val);
        sum += root.val;
        helper(root.left);
        helper(root.right);
    }
    helper(root);
    function sortNumber(a,b) {return a-b;}
    temp.sort(sortNumber);
    let map = {};
    var accu = 0;
    for (let i=0; i<temp.length; i++) {
        accu += temp[i];
        map[temp[i]] = sum - accu;
    }
    function reassign(root) {
        if (root===null) return;
        root.val = root.val + map[root.val];
        reassign(root.left);
        reassign(root.right);
    }
    reassign(root);
    return root;
};

//////////////////////////////////////////////
//// It is a BST, therefore...///////////////

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

var convertBST = function(root) {
    var travel = function(node){
        if (node != null){ 
            if (node.right) travel(node.right);
            node.val = node.val + curNum;
            curNum = node.val;
            if (node.left) travel(node.left); 
        }
        
    };
    var curNum = 0;
     travel(root);
    return root;
};
