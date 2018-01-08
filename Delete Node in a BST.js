/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (root===null || (root.val === key && root.right === null && root.left === null) ) return null;
    var cur = root;
    var pre = null;
    var l = false;
    while (cur!==null) {
        if (cur.val===key) {
            if (cur.left!==null) {
                if (pre===null) {root = root.left; pre = root;}
                else { 
                    if (l) {pre.left = cur.left; pre = pre.left;} 
                    else {pre.right = cur.left; pre = pre.right;}
                }
                while (pre.right!==null) pre = pre.right;
                pre.right = cur.right;
                break;
            } else if (cur.right!==null){
                if (pre===null) root = root.right;
                else {
                    if (l) pre.left = cur.right;
                    else pre.right = cur.right;
                }
                break;
            } else {
                if (l) pre.left = null;
                else pre.right = null;
                break;
            }
        } else if (cur.val<key) {
            pre = cur;
            cur = cur.right;
            l = false;
        } else if (cur.val>key) {
            pre = cur;
            cur = cur.left;
            l = true;
        }
    }
    return root;
};

//////////////////////////////////////
/// easier way below using recusion//
////////////////////////////////////
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var getMax = function(root) {
    while (root.right) {
        root = root.right;
    }
    return root.val;
}

var deleteNode = function(root, key) {
    if (!root) {
        return null;
    }
    if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    }
    else {
          
         if (!root.left) {
            return root.right;
        }
        else if (!root.right) {
            return root.left;
        }
            let newRoot = getMax(root.left);
            root.val = newRoot;
            root.left = deleteNode(root.left, root.val);
        
    }
    return root;
};
