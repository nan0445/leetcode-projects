/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    var dummyHead = new TreeLinkNode(0);
    var pre = dummyHead;
    while (root !== null) {
	    if (root.left !== null) {
		    pre.next = root.left;
		    pre = pre.next;
	    }
	    if (root.right !== null) {
		    pre.next = root.right;
		    pre = pre.next;
	    }
	    root = root.next;
	    if (root === null) {
		    pre = dummyHead;
		    root = dummyHead.next;
		    dummyHead.next = null;
	    }
    }
};
