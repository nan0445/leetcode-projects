/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    var i=0;
    while (i<data.length) {
        if (data[i]>247) return false;
        if (data[i]>=128 && data[i]<192) return false;
        if (data[i]<128) {
            i++;
            continue;
        } else {
            var temp = data[i].toString(2);
            var count = 1;
            for (let j=1; j<4; j++) {
                if (temp[j]==="0") break;
                else count++;
            }
            if (i+count>data.length) return false;
            for (let j=i+1; j<i+count; j++) {
                if (data[j]>=192 || data[j]<128) return false;
            }
            i += count;
        }
    }
    return true;
       
};
