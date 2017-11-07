/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    var res = 0;
    for (i=0; i<board.length; i++) {
        for (j=0; j<board[0].length; j++) {
            if (board[i][j]==="X") {
                if (((i-1>=0 && board[i-1][j]===".") || i===0) && ((j-1>=0 && board[i][j-1]===".") || j===0)) res++;
            }
        }
    }
    return res;
};
