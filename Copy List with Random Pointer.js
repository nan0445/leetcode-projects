/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    let map = {};
    return helper(head);
    function helper(node) {
        if (node===null) return null;
        if (map[node.label]!==undefined) return map[node.label];
        var clone = new RandomListNode(node.label);
        map[clone.label]=clone;
        clone.next = helper(node.next);
        clone.random = helper(node.random);
        return clone;
    }
};
