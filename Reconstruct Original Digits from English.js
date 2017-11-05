/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    var temp = s.split('');
    temp.sort();
    var res = [];
    var p = "zowtufxsgi";
    for (i=0; i<p.length; i++) {
        if (temp.indexOf(p[i])!==-1) {
            var count = temp.lastIndexOf(p[i])-temp.indexOf(p[i])+1;
            res.push(count);
        } else res.push(0);
    }
    res[1]=res[1]-res[0]-res[2]-res[4];
    res[5]-=res[4];
    res[7]-=res[6];
    res[9]=res[9]-res[5]-res[6]-res[8];
    res[3]=res[3]-res[2]-res[8];
    var fin = ""
    for (i=0; i<10; i++) {
        for (j=0; j<res[i];j++) {
            fin+=i.toString();
        }
    }
    return fin;
};

//////////////////////////////////////////////////
// to pass s just one time //////////////////////


/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
  var count = [], res='';

  for (var i = 0; i <= 9; i++)
   count[i] = 0;

   for (var i = 0; i < s.length; i++){
    if (s[i] == 'z') count[0]++;
    if (s[i] == 'w') count[2]++;
    if (s[i] == 'u') count[4]++;
    if (s[i] == 'x') count[6]++;
    if (s[i] == 'g') count[8]++;
    if (s[i] == 'o') count[1]++; //1-0-2-4
    if (s[i] == 'h') count[3]++; //3-8
    if (s[i] == 'f') count[5]++; //5-4
    if (s[i] == 's') count[7]++; //7-6
    if (s[i] == 'i') count[9]++; //9-8-5-6
  }
  count[1] = count[1] - count[0] - count[2] - count[4];
  count[3] -= count[8];
  count[5] -= count[4];
  count[7] -= count[6];
  count[9] = count[9] - count[8] - count[5] - count[6];
  var sb = '';
  for (var i = 0; i <= 9; i++){
   for (var j = 0; j < count[i]; j++){
    sb += i;
   }
  }
  return sb;  
};
