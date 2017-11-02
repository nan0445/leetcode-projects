/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var n1 = [], n2 = [];
    while (l1!==null) {
        n1.push(l1.val);
        l1=l1.next;
    }
    while (l2!==null) {
        n2.push(l2.val);
        l2=l2.next;
    }
    if (n1.length<n2.length) {
        var tt = n1;
        n1 = n2;
        n2 = tt;
    }
    n1.reverse();
    n2.reverse();
    var n3=[];
    var carr = 0;
    for (i=0; i<n2.length; i++) {
        var temp = n1[i] + n2[i] + carr;
        carr = Math.floor(temp/10);
        n3.push(temp%10);
    }
    for (i=n2.length; i<n1.length; i++) {
        var temp = n1[i] + carr;
        carr = Math.floor(temp/10);
        n3.push(temp%10);
    }
    if (carr===1) n3.push(1);
    var l3 = new ListNode(n3[0]);
    for (i=1; i<n3.length; i++) {
        var t = l3;
        l3 = new ListNode(n3[i]);
        l3.next = t;
    }
    return l3;
};
