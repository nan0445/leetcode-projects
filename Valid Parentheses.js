var isValid = function(s) {
    var ele = "(){}[]";
    var idx = -1;
    var indices = new Array();
    var indices_sum = [0,0,0,0,0,0];
    
    if (s === null || s.length === 0 || s === "" || s.length%2 === 1) {
        return false;
    }
    for (i=0; i<ele.length; i++) {
        idx = s.indexOf(ele[i]);
        indices[i] = new Array();
        while (idx != -1) {
            indices[i].push(idx);
            indices_sum[i] += idx;
            idx = s.indexOf(ele[i], idx + 1);
        }
    }
    for (i=0; i<indices_sum.length-1; i+=2) {
        if (indices[i].length != indices[i+1].length || (indices_sum[i+1] - indices_sum[i])%2 != indices[i].length%2) {
            return false;
        }
    } 
    return true;
};
