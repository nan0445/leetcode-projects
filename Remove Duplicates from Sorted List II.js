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
var deleteDuplicates = function(head) {
    if (head===null || head.next===null) return head;
    var curr = head.next;
    var nh = head;
    var flag = false;
    var temp = head.val;
    var count = 0;
    while (curr!==null) {
        if (temp===curr.val) {
            curr = curr.next;
            flag = true;
            
        } else {
            if (flag) {
                if (temp===head.val) {
                    head = curr;
                    nh = head;
                    count = -1;
                } else {
                    nh.next = curr;
                }
            } else if (!flag && count>0) nh = nh.next;
            temp = curr.val;
            flag = false;
            curr = curr.next;
        }
        count++;
    }
    if (flag) {
        if (temp===head.val) {
            head = curr;
            nh = head;
            count = -1;
        } else {
            nh.next = curr;
        }
    }
    return head;
};


////////////////////////////
//// easier ///////////////
//// make a fake head first///
////////////////////////

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
var deleteDuplicates = function(head) {
    if (head === null) return null;
    var fake = new ListNode(0);
    fake.next = head;
    
    var prev = fake;
    var curr = head;
    while (curr !== null) {
        // skip duplicates
        while (curr.next !== null && curr.val === curr.next.val) {
            curr = curr.next;
        }
        if (prev.next === curr) {
            prev = prev.next;
        } else {
            prev.next = curr.next;
        }
        curr = curr.next;
    }
    
    return fake.next;
};
