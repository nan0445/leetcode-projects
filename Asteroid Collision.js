/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    if (asteroids.length===0) return [];
    var stack = [];
    for (var i=0; i<asteroids.length; i++) {
        if (stack.length===0 || asteroids[i]>=0) stack.push(asteroids[i]);
        else helper(asteroids[i], stack);
    }
    return stack;
    
    function helper(cur, stack) {
        if (stack.length===0) {
            stack.push(cur);
            return;
        }
        var temp = stack.pop();
        if (temp<=0) {
            stack.push(temp);
            stack.push(cur);
        }
        else {
            if (temp>-cur) stack.push(temp);
            else if (temp<-cur) helper(cur, stack);
        }
    }
};
