/**
 * @param {string} color
 * @return {string}
 */
var similarRGB = function(color) {
    var temp = ['00','11','22','33','44','55','66','77','88','99','aa','bb','cc','dd','ee','ff'];
    var x = [color[1]+color[2],color[3]+color[4],color[5]+color[6]];
    var y = ["","",""];
    for (let i=0; i<=2; i++) {
        var min = Number.MAX_VALUE;
        for (let j=0; j<temp.length; j++) {
            var p = Math.abs(parseInt(temp[j],16)-parseInt(x[i],16));
            if (p<min) {
                min = p;
                y[i]=temp[j];
            }
        }
    }
    var res = y.join("");
    return "#"+res;
};
