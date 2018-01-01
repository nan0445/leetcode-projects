/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    let flag = false;
    helper(s,t);
    return flag;
    function helper(ss,tt) {
        if (ss===null) return;
        if (ss.val===tt.val) {
            flag= true;
            helper2(ss,tt);
            if (flag) return;
        }
        if (flag) return;
        helper(ss.left, tt);
        if (flag) return;
        helper(ss.right,tt);
    }
    function helper2(sss, ttt) {
        if (sss===null && ttt!==null||sss!==null && ttt===null) flag = false;
        if (sss===null||ttt===null) return;
        if (sss.val!==ttt.val) flag = false;
        helper2(sss.left, ttt.left);
        helper2(sss.right, ttt.right);
    }
};

/////////////////////////////
/// compare the value strings/////

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    var sSubTree = preOrder(s, true);
    var tSubTree = preOrder(t, true);
    return sSubTree.indexOf(tSubTree) !== -1;
};

function preOrder(t, left) {
    if(t == null) {
        if(left)
            return "lnull";
        else
            return "rnull";
    }
    return '#'+t.val + " " + preOrder(t.left, true) + " " + preOrder(t.right, false);
}
