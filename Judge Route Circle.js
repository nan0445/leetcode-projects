/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var map = {};
    map["U"] = [0,1];
    map["D"] = [0,-1];
    map["L"] = [-1,0];
    map["R"] = [1,0];
    var res = [0,0];
    for (let i=0; i<moves.length; i++) {
        res[0]+=map[moves[i]][0];
        res[1]+=map[moves[i]][1];
    }
    return res[0]===0 && res[1]===0;
};
