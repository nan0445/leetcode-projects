/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
        var res = [];
        for (let i = 0; i < input.length; i++) {
            var c = input.charAt(i);
            if (c == '-' || c == '+' || c == '*') {
                var a = input.substring(0, i);
                var b = input.substring(i + 1);
                var al = diffWaysToCompute(a);
                var bl = diffWaysToCompute(b);
                for (let x in al) {
                    for (let y in bl) {
                        if (c == '-') {
                            res.push(al[x] - bl[y]);
                        } else if (c == '+') {
                            res.push(al[x] + bl[y]);
                        } else if (c == '*') {
                            res.push(al[x] * bl[y]);
                        }
                    }
                }
            }
        }
        if (res.length == 0) res.push(input-0);
        return res;
};
