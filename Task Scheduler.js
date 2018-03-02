/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    var map = {};
    var count = 0;
    var kind = 0;
    var max = 0;
    for (let i=0; i<tasks.length; i++) {
        if (map[tasks[i]]===undefined) {
            map[tasks[i]] = 1;
            kind++;
        } else map[tasks[i]]++;
        if (max<map[tasks[i]]) {
            max = map[tasks[i]];
            count = 1;
        } else if (max===map[tasks[i]]) count++;
    }
    return Math.max(tasks.length, (max-1)*(n+1)+count);
};
