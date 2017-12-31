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
var findFrequentTreeSum = function(root) {
    var c = [];
    helper(root);
    function helper(root) {
        if (root===null) return 0;
        else {
            var l = helper(root.left);
            var r = helper(root.right);
        }
        c.push(root.val + l + r);
        return root.val + l + r;
    }
    var map = {};
    var res = [];
    var max = 0;
    for (let i=0; i<c.length; i++) {
        if (map[c[i]]===undefined) map[c[i]]=1;
        else map[c[i]]++;
        if (map[c[i]]>max) {
            max = map[c[i]];
            res = [];
            res.push(c[i]);
        } else if (map[c[i]]===max) res.push(c[i]);
    }
    return res;
};
