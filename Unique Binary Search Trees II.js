/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n<=0) return [];
    else return dfs(1,n);
    
    function dfs(l,r) {
        var res = [];
        if (l>r) res.push(null);
        else {
            for (let i=l; i<=r; i++) {
                var l_child = dfs(l, i-1);
                var r_child = dfs(i+1, r);
                for (let j=0; j<l_child.length; j++) {
                    for (let k=0; k<r_child.length; k++) {
                        var root = new TreeNode(i);
                        root.left = l_child[j];
                        root.right = r_child[k];
                        res.push(root);
                    }
                }
            }
        }
        return res;
            
    }
};
