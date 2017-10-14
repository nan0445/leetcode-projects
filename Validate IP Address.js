/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
   // IP = "01.01.01.01"
    if (IP.indexOf('.') !== -1) {
        var temp = IP.split('.');
        for (i=0; i<temp.length; i++) {
            if (!/^[0-9]*$/.test(temp[i]) || (temp[i]-0)>=256 || temp[i]<0 || temp[i].length < 1) return "Neither";
            if (temp[i].length>1 && temp[i][0] === "0") return "Neither";
        }
        if (i != 4 || temp.join('.') !== IP) return "Neither";
        return "IPv4";
    } else {
        var temp = IP.split(':');
        for (i=0; i<temp.length; i++) {
            if (!/^[A-Fa-f0-9]*$/.test(temp[i]) || temp[i].length > 4 || temp[i].length < 1) return "Neither";
            //if (temp[i].length!==4 && (temp[i][0] === "0" && temp[i][1] === "0")) return "Neither";
        }
        if (i != 8 || temp.join(':') !== IP) return "Neither";
        return "IPv6";
    }
    return "Neither";
};
