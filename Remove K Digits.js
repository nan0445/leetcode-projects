/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if (k===num.length) return "0";
    var res="";
    while (k>0&&k<num.length) {
        var temp = num.slice(0,k+1);
        var t=temp.split('');
        t.sort();
        var idx = temp.indexOf(t[0]);
        res = res.concat(t[0]);
        num = num.slice(idx+1);
        k = k-idx;
    }
    var final = k===0 ? res.concat(num) : res;
    for (i=0; i<final.length; i++) {
        if (final[i]!=="0") break;
        else {final=final.slice(i+1);i--;}
    }
    return final==="" ? "0" : final;
};


////////////// very slow/////////////////////////
/// below is more efficient/////////////////////
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = [];
    for (let n of num) {
        while (stack.length > 0 && stack[stack.length-1] > n && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(n);
    }
    
    let i = 0;
    while (stack[i] == '0') i++;
    
    let res = "";
    for (; i < stack.length - k; i++) {
        res += stack[i];
    }
    return res.length > 0 ? res : "0";
};

