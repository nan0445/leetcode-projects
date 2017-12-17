/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    var stack = [];
    var temp = n.toString().split("");
    var flag = false;
    var res = [];
    for (var i=temp.length-1; i>=0; i--) {
        if (flag) break;
        if (stack.length!==0 && (temp[i]-0)<(stack[stack.length-1]-0)) {
            flag = true;
            while ((temp[i]-0)<(stack[stack.length-1]-0)) res.push(stack.pop());
        }
        stack.push(temp[i]);
    }
    var fin = temp.slice(0, i+1);
    var end = [res.pop()];
    end = end.concat(stack);
    for (i=res.length-1; i>=0; i--) {
        end.push(res[i]);
    }
    fin = fin.concat(end).join("")-0;
    return fin>n && fin <= 2147483647 ? fin : -1
};
