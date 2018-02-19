/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    var color = new Array(graph.length).fill(-1);
    for (let i=0; i<graph.length; i++) {
        if (color[i]===-1) {
            var stack = [];
            stack.push(i);
            color[i]=0;
        }
        while (stack.length>0) {
            var node = stack.pop();
            for (let j=0; j<graph[node].length; j++) {
                if (color[graph[node][j]]===-1) {
                    stack.push(graph[node][j]);
                    color[graph[node][j]] = color[node]===0 ? 1 : 0;
                } else if (color[graph[node][j]]===color[node]) return false;
            }
        }
    }
    return true;
};
