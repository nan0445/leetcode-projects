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
var rightSideView = function(root) {
    var res = [];
    let i=0;
    helper(root);
    function helper(root) {
        if (root===null) return;
        if (res[i]===undefined) res[i]=[];
        res[i].push(root.val);
        i++;
        helper(root.left);
        helper(root.right);
        i--;
    }
    var fin = [];
    for (let j=0; j<res.length; j++){
        fin.push(res[j].pop())
    }
    return fin;
};
