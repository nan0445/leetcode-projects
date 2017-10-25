/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.arr = [x].concat(this.arr);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.splice(0, 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    var min = Number.MAX_VALUE;
    for (var i=0; i<this.arr.length; i++) {
        min = Math.min(min, this.arr[i]);
    }
    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
