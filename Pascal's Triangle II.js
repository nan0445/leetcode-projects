/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    rowK = [1];
    for(let i=1; i<=rowIndex; i++) {
        for(let j=i; j>0; j--) {
            if(i===j) {
                rowK[j] = 1;
            } else {
                rowK[j] = rowK[j-1] + rowK[j];
            }
        }
    }
    return rowK;
};

