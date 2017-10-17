/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
   for (i=0; i<9; i++) {
        var map = {};
        for (j=0; j<9; j++) {
            if (board[i][j]!=='.'){
                if (!map[board[i][j]]) map[board[i][j]]=1;
                else return false;
            } 
        }
    }
    for (j=0; j<9; j++) {
        var map = {};
        for (i=0; i<9; i++) {
            if (board[i][j]!=='.'){
                if (!map[board[i][j]]) map[board[i][j]]=1;
                else return false;
            } 
        }
    }
    for (i=1; i<=7; i+=3) {
        for (j=1; j<=7; j+=3) {
            var map = {};
            for (m=i-1; m<=i+1; m++) {
                for (n=j-1; n<=j+1; n++) {
                    if (board[m][n]!=='.'){
                        if (!map[board[m][n]]) map[board[m][n]]=1;
                        else return false;
                    }
                }
            }
        }
    }
    return true;
};
