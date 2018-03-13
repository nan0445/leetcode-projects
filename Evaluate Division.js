/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    var map = {};
    for (let i=0; i<equations.length; i++) {
        if (map[equations[i][0]]===undefined) map[equations[i][0]] = 0;
        if (map[equations[i][1]]===undefined) map[equations[i][1]] = 0;
    }
    let res = [];
    let temp = 1.0;
    let flag = false;
    let check = new Array(equations.length).fill(false);
    for (let i=0; i<queries.length; i++) {
        if (map[queries[i][0]]===undefined||map[queries[i][1]]===undefined) {
            res.push(-1);
            continue;
        }
        if (queries[i][0]===queries[i][1]) res.push(1);
        else {
            for (let x=0; x<check.length; x++) check[x]=false;
            temp = 1;
            flag = false;
            helper(queries[i][0],queries[i][1],equations);
            if (!flag) res.push(-1);
        }
    }
    function helper(q,des,equations) {
        if (flag) return;
        for (let p=0; p<equations.length; p++) {
            if (flag) return;
            if (check[p]) continue;
            var ind = equations[p].indexOf(q);
            if (ind!==-1) {
                check[p]=true;
                if (ind===0) {
                    temp*=values[p];
                    var nq = equations[p][1];
                    if (equations[p].indexOf(des)!==-1) {
                        res.push(temp);
                        flag = true;
                        return;
                    } else {
                        helper(nq,des,equations);
                        temp/=values[p];
                    }
                } else if (ind===1) {
                    temp /= values[p];
                    var nq = equations[p][0];
                    if (equations[p].indexOf(des)!==-1) {
                        res.push(temp);
                        flag = true;
                        return;
                    } else {
                        helper(nq,des,equations);
                        temp*=values[p];
                    }
                } 
                
            } 
        }
    }
    return res;
};


/////////////////////
///for more concisely/////

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const hash = {};
    for (let i in equations) {
        const [s, e] = equations[i];
        const v = values[i];
        if (hash[s] === undefined) hash[s] = {};
        hash[s][e] = v;
        if (hash[e] === undefined) hash[e] = {};
        hash[e][s] = 1/v;
    }
    
    for (const m in hash) {
        for (const s in hash[m]) {
            for (const e in hash[m]) {
                hash[s][e] = hash[s][m] * hash[m][e];
            }
        }
    }
    
    const result = [];
    for (const [s,e] of queries) {
        if (hash[s] === undefined) {
            result.push(-1.0);
        } else if (hash[s][e] === undefined) {
            result.push(-1.0);
        } else {
            result.push(hash[s][e]);
        }
    }
    return result;
};
