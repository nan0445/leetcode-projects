/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    var flag = true;
    var count = 0;
    for (let i=1; i<=N; i++) {
        flag = true;
        var temp = i.toString().split('');
        for (let j=0; j<temp.length; j++) {
            if (temp[j]==="3" || temp[j]==="4" || temp[j]==="7") {flag = false; break;}
            if (temp[j]==="2") temp[j]="5";
            else if(temp[j]==="6") temp[j]="9";
            else if(temp[j]==="5") temp[j]="2";
            else if(temp[j]==="9") temp[j]="6";
        }
        if (flag && parseInt(temp.join(''))!==i) count++;
    }
    return count;
};
