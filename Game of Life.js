/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    if (board.length<1) return;
    for (var i=0; i<board.length; i++) {
        for (var j=0; j<board[0].length; j++) {
            var count = 0;
            for (var m=i-1; m<=i+1; m++) {
                for (var n=j-1; n<=j+1; n++) {
                    if (m>=0 && m<board.length && n>=0 && n<board[0].length && !(m===i && n===j)) {
                        count+=(board[m][n] & 1);
                    }
                }
            }
            if (count===3 && board[i][j]===0) board[i][j]=2;
            else if (count>=2 && count<=3 && board[i][j]===1) board[i][j]=3;
        }
    }
    for (var i=0; i<board.length; i++) {
        for (var j=0; j<board[0].length; j++) {
            board[i][j] >>= 1;
        }
    }
};
