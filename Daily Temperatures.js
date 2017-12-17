/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    var res = new Array(temperatures.length).fill(0);
    var stack = [];
    for (let i=0; i<temperatures.length; i++) {
        if (stack.length!==0 && temperatures[i]>temperatures[stack[stack.length-1]]) {
            while (temperatures[i]>temperatures[stack[stack.length-1]]) {
                res[stack[stack.length-1]] = i-stack[stack.length-1];
                stack.pop();
            }
        }
        stack.push(i);
    }
    return res;
};
