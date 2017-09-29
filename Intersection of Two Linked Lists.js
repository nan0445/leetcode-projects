/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var pA = headA;
    var pB = headB;
    if (pA === null || pB === null) return null;
    while (true) {
        if (pA === null && pB === null) return null;
        if (pA === null) pA = headB;
        if (pB === null) pB = headA;
        if (pA === pB) return pA;
        pA = pA.next;
        pB = pB.next;
    }
};
