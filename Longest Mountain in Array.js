/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
    var temp = [];
    if (A.length<3) return 0;
    var maxl = 0;
    var flag = false;
    for (let i=1; i<A.length; i++) {
        if (A[i]>A[i-1]) {
            if (!flag) {
                if (temp.length>0) maxl = Math.max(maxl,temp.length+1);
                temp=[];
            }
            flag = true;
            temp.push(A[i]);
        } else if (A[i]<A[i-1]) {
            if (temp.length>0) {
                temp.push(A[i]);
            }
            flag = false;
        } else {
            if (temp.length>0 && !flag) maxl = Math.max(maxl,temp.length+1);
            flag = false;
            temp = [];
        }
    }
    if (temp.length>0 && !flag) maxl = Math.max(maxl,temp.length+1);
    return maxl;
};
