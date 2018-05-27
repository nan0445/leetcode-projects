/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    var N = rooms.length;
    var check = new Array(N).fill(false);
    helper(0, rooms);
    function helper(p,rooms) {
        for (let j=0; j<rooms[p].length; j++) {
            if (check[rooms[p][j]]) continue;
            check[rooms[p][j]]=true;
            helper(rooms[p][j],rooms);
        }
    }
    
    for (let i=1; i<check.length; i++) {
        if (!check[i]) return false;
    }
    return true;
    
};
