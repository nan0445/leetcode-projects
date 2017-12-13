/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
    var res = [];
    var count = 0;
    var temp = root;
    while (temp!==null) {
        count++;
        temp=temp.next;
    }
    var n = Math.floor(count/k);
    var num = new Array(k).fill(n);
    for (let i=0; i<count%k; i++) num[i]++;
    temp = root;
    for (let i=0; i<num.length; i++) {
        var tt = temp;
        for (let j=1; j<num[i]; j++) {
            temp = temp.next;
        }
        var ntemp = temp===null ? null : temp.next;
        if (temp !== null) temp.next = null;
        res.push(tt);
        temp = ntemp;
    }
    return res;
};
