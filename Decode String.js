/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var num = "", temp = "", flag = false;
    var N=[], T=[];
    var res = "";
    for (let i=0; i<s.length; i++) {
        if ((s[i]-0)>=0 && (s[i]-0)<=9) {
            num+=s[i];
            if (flag || temp.length!==0) {
                T.push(temp);
                if (!flag && temp.length!==0) {
                    N.push(1);
                    var tt = T.pop();
                    var l = N.pop();
                    var ttt = "";
                    for (let j=0; j<l; j++) {
                        ttt += tt;
                    }
                    if (T.length>0) {
                        var m = T.pop();
                        m += ttt;
                        T.push(m);
                    } else res += ttt;
                    
                }
                flag = false;
                temp = "";
            }
            
            
            
        }
        else if (s[i]==="[") {
            flag = true;
            N.push(num-0);
            num = "";
        }
        else if (s[i]==="]") {
            if (flag || temp.length!==0) {
                T.push(temp);
                if (!flag && temp.length!==0) {
                    N.push(1);
                    i--;
                }
            }
            
            var tt = T.pop();
            var l = N.pop();
            var ttt = "";
            for (let j=0; j<l; j++) {
                ttt += tt;
            }
            if (T.length>0) {
                var m = T.pop();
                m += ttt;
                T.push(m);
            } else res += ttt;
            flag = false;
            temp = "";
            num = "";
        } else {
            if (!flag && N.length===0) res += s[i];
            else {
                temp += s[i];
                
            }
        }
    }
    return res;
};
