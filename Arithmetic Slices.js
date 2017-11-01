/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    var res=0, count=0;
    if (A.length<3) return 0;
    for (i=2; i<A.length; i++) {
        if ((A[i]-A[i-1])===(A[i-1]-A[i-2])) count++;
        else {
            if (count>0) res+=(count+1)*count/2;
            count=0;
        }
    }
    if (count>0) res+=(count+1)*count/2;
    return res;
};
