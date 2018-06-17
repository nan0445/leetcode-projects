/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    if (position.length===0) return 0;
    var map = {};
    for (let i=0; i<position.length; i++) {
        map[position[i]] = speed[i];
    }
    function sortNumber(a,b) {return a-b;}
    position.sort(sortNumber);
    var res = 0;
    var t = 0.0;
    var p = 0;
    var stack = [];
    for (var i=0; i<position.length-1; i++) {
        if (stack.length>0) {
            while (stack.length>0) {
                var temp = stack.pop();
                if (temp===position[i-1]) {
                    stack.push(temp);
                    break;
                } else {
                    t = (position[i]-temp)/(map[temp]-map[position[i]]);
                    if (t<=0 || temp+map[temp]*t>target) {stack.push(temp); break;}
                    else res--;
                }
            }
            
        }
        
        t = (position[i+1]-position[i])/(map[position[i]]-map[position[i+1]]);
        if (t<=0) {
            res++;
            stack.push(position[i]);
            continue;
            
        }
        p = position[i]+map[position[i]]*t;
        if (p>target) {
            res++;
            stack.push(position[i]);
            continue;
        }
    }
    res++;
    if (stack.length>0) {
            while (stack.length>0) {
                var temp = stack.pop();
                if (temp===position[i-1]) {
                    stack.push(temp);
                    break;
                } else {
                    t = (position[i]-temp)/(map[temp]-map[position[i]]);
                    if (t<=0 || temp+map[temp]*t>target) {stack.push(temp); break;}
                    else res--;
                }
            }
            
        }
    return res;
};
