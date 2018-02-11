/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
    if (tx===sx && ty===sy) return true;
    while (tx>=sx && ty>=sy) {
        if (tx===ty) break;
        if (tx===sx && ty===sy) return true;
        if (tx>ty) {
            if (tx % ty>=sx) tx = tx % ty;
            else {
                if (tx-ty<sx) return false;
                else {
                    var i = 0;
                    while (i*ty+tx%ty<sx) i++;
                    tx = i*ty+tx%ty;
                }
            }
            
        }
        else {
            if (ty % tx >=sy) ty = ty % tx;
            else {
                if (ty-tx<sy) return false;
                else {
                    var i = 0;
                    while (i*tx+ty%tx<sy) i++;
                    ty = i*tx+ty%tx;
                }
            }
        }
    }
    return tx===sx && ty===sy;
};
