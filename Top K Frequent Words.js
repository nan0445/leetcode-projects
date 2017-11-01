/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    words.sort();
    var map={};
    var idx = [], w = [];
    for (i=0; i<words.length; i++) {
        if (map[words[i]]===undefined) {
            map[words[i]]=1;
            idx.push(1);
            w.push(words[i]);
        }
        else {
            map[words[i]]++;
            idx[w.indexOf(words[i])]++;
        }
    }
    
    var sort_idx=idx.slice();
    function sortNumber(a,b) {return b-a;}
    sort_idx.sort(sortNumber);
    var res = [];
    for (i=0; i<k; i++) {
        var p = idx.indexOf(sort_idx[i]);
        res.push(w[p]);
        idx.splice(p,1);
        w.splice(p,1);
    }
    return res;
};
///////////////////////////////////////////////
/// a little memory concise one//////////////////////

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    var obj = {},
        arr = [],
        resultArr = [];
    for (var i = 0, l = words.length; i < l; i++) {
        var objValue = obj[words[i]]
        if (objValue != undefined) {
            arr[objValue].count ++
            continue;
        } else {
            obj[words[i]] = arr.length;
            arr.push({
                word: words[i],
                count: 1
            })
        }
    }
    arr.sort(function (a, b) {
        var countA = a.count,
            countB = b.count,
            arrSort;
        if (countA !== countB) {
           return countB - countA 
        }
        arrSort = [a.word, b.word];
        arrSort.sort();
        if (a.word === arrSort[0]) {
            return -1
        }
        return 1
    })
    for (var j = 0; j < k; j ++) {
        resultArr[j] = arr[j].word
    }
    return resultArr
};
