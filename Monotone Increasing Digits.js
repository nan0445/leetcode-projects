/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    if (N<10) return N;
    var temp = N.toString().split("");
    var flag = false;
    for (var i=1; i<temp.length; i++) {
        if ((flag && i===0) || (flag && ((temp[i]-0)>=(temp[i-1]-0)))) break;
        if (((temp[i]-0)<(temp[i-1]-0)) && (i>=1)) {
            flag = true;
            temp[i-1]=((temp[i-1]-0)-1).toString();
            i-=2;
        }
    }
    
    for (var j=i; j<temp.length; j++) {
        if (j===0 && temp[j]==="0") {temp.splice(0,1); i--;}
        if (j>i) temp[j]="9";
    }
    return parseInt(temp.join(""));
};
