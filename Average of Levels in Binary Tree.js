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
var averageOfLevels = function(root) {
    var list = [];
    var ave = [];
    addlist(list, root, 0);
    for (i=0; i<list.length; i++) {
        var temp = 0;
        for (j=0; j<list[i].length; j++) {
            temp += list[i][j];
        }
        ave.push(temp/j);
    }
    return ave
};

var addlist = function (list, root, level) {
    if (root === null) return;
    if (list[level] === undefined) list[level] = [];
    addlist(list, root.left, level+1);
    addlist(list, root.right, level+1);
    list[level].push(root.val);
};
