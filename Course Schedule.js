/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var graph = [];
    var visited = [];
    for (var i=0; i<numCourses; i++) {
        graph[i] = [];
        visited[i] = false;
    }
    for (var i=0; i<prerequisites.length; i++) {
        graph[prerequisites[i][0]].push(prerequisites[i][1]);
    }
    
    for (var i=0; i<numCourses; i++) {
        if (!helper(graph, i, visited)) return false;
    }
    return true;
    
    function helper(graph, num, vistied) {
        if (visited[num]) return false;
        else visited[num] = true;
        
        for (var p=0; p<graph[num].length; p++) {
            if (!helper(graph, graph[num][p], visited)) return false;
        }
        visited[num] = false;
        return true;
    }
};
