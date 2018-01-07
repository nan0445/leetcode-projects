if (head===null || head.next===null) return head;
    var l1 = new ListNode(0);
    var l2 = l1;
    l1.next = head;
    var flag = true;
    var count = 0;
    while (!flag || head!==null) {
        
        if (head===null || head.next===null) { if (flag) break; else {head = l2.next; l1 = l2; flag = true;}}
        if (head.val>head.next.val) {
            var temp = head.next.next;
            l1.next = new ListNode(head.next.val);
            l1 = l1.next;
            l1.next = new ListNode(head.val);
            l1.next.next = temp;
            head = l1.next;
            flag = false;
        } else {
            head = head.next;
            l1 = l1.next;
        }
    }
    //l1.next = null;
    return l2.next;
    
  //////////////////////////////////////
  /// this is TLE /////////////////////
  ////// below runs OK//////////////////
  /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) 
        return head;
    let p1 = head, p2 = head.next;
    // Find the midpoint
    while (p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
    }
    p2 = sortList(p1.next);
    p1.next = null;
    p1 = sortList(head);
    return merge(p1, p2);
};

function merge(h1, h2) {
    let fakeHead = new ListNode(Number.MIN_VALUE), p = fakeHead;
    while (h1 && h2) {
        if (h1.val < h2.val) {
            p.next = h1;
            h1 = h1.next;
        } else {
            p.next = h2;
            h2 = h2.next;
        }
        p = p.next;
    }
    p.next = h1 ? h1 : h2;
    return fakeHead.next;
}
