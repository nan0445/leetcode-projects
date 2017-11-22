/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
    var num = new Array(N);
    for (var i=0; i<N; i++) {
        num[i]=i+1;
    }
    count = 0;
    permute(num, 0);
    return count;
    
    function permute(num, l) {
        if(l===num.length) count++;
        for (var i=l; i<num.length; i++){
            swap(num, i, l);
            if (num[l]%(l+1)===0 ||(l+1)%num[l]===0) permute(num, l+1);
            swap(num, i, l);
        }
    }
    function swap(num, x, y) {
        var temp = num[x];
        num[x]=num[y];
        num[y]=temp;
    }
};
