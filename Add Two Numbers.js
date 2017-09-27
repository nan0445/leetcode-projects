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
    var temp = l1.val + l2.val;
    var carry = 0;
    if (temp>=10) {
        carry = 1;
        var head = new ListNode(temp%10);
    } else {
        carry = 0;
        var head = new ListNode(temp);
    }
    
    generateList(head, l1.next, l2.next, carry);
    
    function generateList(head, l1, l2, carry) {
        if (l1 === null && l2 === null) {
            if (carry===1) {
                head.next = new ListNode(1); 
                
            }
            return;
        }
        if (l1 === null && l2 !== null) {
            var temp = l2.val + carry;
            if (temp>=10) {
                carry = 1;
                head.next = new ListNode(temp%10);
                head.next.next = new ListNode(carry);
            } else {
                carry = 0;
                head.next = new ListNode(temp);
            }
            generateList(head.next, l1, l2.next, carry);
            return;
        }
        if (l2 === null && l1 !== null) {
            var temp = l1.val + carry;
            if (temp>=10) {
                carry = 1;
                head.next = new ListNode(temp%10);
                head.next.next = new ListNode(carry);
            } else {
                carry = 0;
                head.next = new ListNode(temp);
            }
            generateList(head.next, l1.next, l2, carry);
            return;
        }
        if (l2 !== null && l1 !== null) {
        var temp = l1.val + l2.val + carry;
        if (temp>=10) {
            carry = 1;
            head.next = new ListNode(temp%10);
        } else {
            carry = 0;
            head.next = new ListNode(temp);
        }
            
        }
        generateList(head.next, l1.next, l2.next, carry);
    }
        
    return head;
};

/////////////////////////////////////////////////////
//// code is too long///////////////////////////////
///// see below for short!!!!///////////////////////

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
    let node1 = l1;
    let node2 = l2;
    const sum = new ListNode(0);
    let sumNode = sum;
    let prev = sumNode;
    let carry = 0;
    while(node1 || node2 || (carry !== null)) {
        let val1 = 0;
        let val2 = 0;
        if (node1) {
            val1 = node1.val;
            node1 = node1.next;
        }
        if (node2) {
            val2 = node2.val;
            node2 = node2.next;
        }
        let nodeSum = val1 + val2 + carry;
        if (nodeSum >= 10) {
            carry = 1;
            nodeSum -= 10;
        } else carry = null;
        
        sumNode.next = new ListNode(nodeSum);
        sumNode = sumNode.next;
    }
    return sum.next;
};
