/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    var map = {};
    for (var i=0; i<accounts.length; i++) {
        if (map[accounts[i][0]]===undefined) {
            map[accounts[i][0]]=[];
        }
        var t = accounts[i].slice();
        t.splice(0,1);
        var x = [];
        for (var m=0; m<t.length; m++) if (x.indexOf(t[m])===-1) x.push(t[m]);
        map[accounts[i][0]].push(x);
    }
    var res = [];
    for (var i in map) {
        helper(map[i],1);
        var tt = [i];
        for (var j=0; j<map[i].length; j++) {
            map[i][j].sort()
            map[i][j]=tt.concat(map[i][j]);
        }
        res=res.concat(map[i]);
    }
    return res;
    
    function helper(emails,start) {
        for (var k=start; k<emails.length; k++) {
            for (var v=0; v<k; v++) {
                var flag = false;
                var temp = [];
                if (emails[k]===undefined) return;
                for (var p=0; p<emails[k].length; p++) {
                    if (emails[v].indexOf(emails[k][p])!==-1) flag = true;
                    else temp.push(emails[k][p]);
                }
                if (flag) {
                    emails[k]=emails[v].concat(temp);
                    emails.splice(v,1);
                    helper(emails,k-1);
                }
            }
        }
    }
  
};

/////////////////////////////////////////////////////////////////
///// too slow!!!! /////////////////////////////////////////
