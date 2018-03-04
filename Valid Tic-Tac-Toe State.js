/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
    var mapx = [];
    var mapo = [];
    var xcount = 0, ocount = 0;
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            if (board[i][j]==="X") {
                xcount++;
                mapx.push(i.toString()+j.toString());
            }
            if (board[i][j]==="O") {
                ocount++;
                mapo.push(i.toString()+j.toString());
            }
            if (xcount>5 || ocount>4) return false;
        }
    }
    if (xcount<ocount || xcount>ocount+1) return false;
    var linex = 0, lineo = 0;
    if ((mapx.indexOf("00")!==-1) && (mapx.indexOf("01")!==-1) && (mapx.indexOf("02")!==-1)) linex++;
    if ((mapx.indexOf("10")!==-1) && (mapx.indexOf("11")!==-1) && (mapx.indexOf("12")!==-1)) linex++;
    if ((mapx.indexOf("20")!==-1) && (mapx.indexOf("21")!==-1) && (mapx.indexOf("22")!==-1)) linex++;
    if ((mapx.indexOf("00")!==-1) && (mapx.indexOf("10")!==-1) && (mapx.indexOf("20")!==-1)) linex++;
    if ((mapx.indexOf("01")!==-1) && (mapx.indexOf("11")!==-1) && (mapx.indexOf("21")!==-1)) linex++;
    if ((mapx.indexOf("02")!==-1) && (mapx.indexOf("12")!==-1) && (mapx.indexOf("22")!==-1)) linex++;
    if ((mapx.indexOf("00")!==-1) && (mapx.indexOf("11")!==-1) && (mapx.indexOf("22")!==-1)) linex++;
    if ((mapx.indexOf("20")!==-1) && (mapx.indexOf("11")!==-1) && (mapx.indexOf("02")!==-1)) linex++;
    if (linex>1) return false;
    
    if ((mapo.indexOf("00")!==-1) && (mapo.indexOf("01")!==-1) && (mapo.indexOf("02")!==-1)) lineo++;
    if ((mapo.indexOf("10")!==-1) && (mapo.indexOf("11")!==-1) && (mapo.indexOf("12")!==-1)) lineo++;
    if ((mapo.indexOf("20")!==-1) && (mapo.indexOf("21")!==-1) && (mapo.indexOf("22")!==-1)) lineo++;
    if ((mapo.indexOf("00")!==-1) && (mapo.indexOf("10")!==-1) && (mapo.indexOf("20")!==-1)) lineo++;
    if ((mapo.indexOf("01")!==-1) && (mapo.indexOf("11")!==-1) && (mapo.indexOf("21")!==-1)) lineo++;
    if ((mapo.indexOf("02")!==-1) && (mapo.indexOf("12")!==-1) && (mapo.indexOf("22")!==-1)) lineo++;
    if ((mapo.indexOf("00")!==-1) && (mapo.indexOf("11")!==-1) && (mapo.indexOf("22")!==-1)) lineo++;
    if ((mapo.indexOf("20")!==-1) && (mapo.indexOf("11")!==-1) && (mapo.indexOf("02")!==-1)) lineo++;
    if (lineo>1) return false;
    
    if (linex===1 && lineo===1) return false;
    if (linex===1 && xcount!==ocount+1) return false;
    if (lineo===1 && xcount!==ocount) return false
    return true;
};
