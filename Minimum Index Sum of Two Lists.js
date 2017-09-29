/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    
    var map = {};
    for (i=0; i<list1.length; i++) {
        map[list1[i]] = i;
    }
    var com_interest = [];
    var count = [];
    for (i=0; i<list2.length; i++) {
        if (map[list2[i]] !== undefined) {
            com_interest.push(list2[i]);
            count.push(map[list2[i]]+i);
        }
    }
    var min_count = 2001;
    var final_result = [];
    for (i=0; i<count.length; i++) {
        if (count[i] === min_count) final_result.push(com_interest[i]);
        if (count[i]<min_count) {
            final_result = [];
            final_result.push(com_interest[i]);
            min_count = count[i];
        }
                
    }
    
    return final_result;
};
