/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    var graph = [];
    var visited = [];
    var onpath = [];
    for (var i=0; i<numCourses; i++) {
        graph[i] = [];
        visited[i] = false;
        onpath[i] = false;
    }
    for (var i=0; i<prerequisites.length; i++) {
        graph[prerequisites[i][0]].push(prerequisites[i][1]);
    }
    
    res = [];
    for (var i=0; i<numCourses; i++) {
        if (!visited[i] && helper(graph, i, visited, onpath)) return [];
    }
    //res.reverse();
    return res;
    
    function helper(graph, num, vistied, onpath) {
        if (visited[num]) return false;
        else {
            visited[num] = true;
            onpath[num] = true;
        }
        for (var p=0; p<graph[num].length; p++) {
            if (onpath[graph[num][p]] || helper(graph, graph[num][p], visited, onpath)) return true;
        }
        res.push(num);
        return onpath[num] = false;
    }
};
