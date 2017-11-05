'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
   var arr3 = [];
    for (var i = 0; i < collection_a.length; i++) {
                        var flag = true;
                        for (var j = 0; j < collection_b.length; j++) {
                            if (collection_b[j] == collection_a[i]) {
                                flag = false;
                            }
                        }
                        if (flag) {
                            arr3.push(collection_a[i]);
                        }
                    }
return arr3;
}
module.exports = choose_no_common_elements;
