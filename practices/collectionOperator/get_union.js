'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var a = collection_a.concat(collection_b);
      for(var i=0; i<a.length; ++i) {
          for(var j=i+1; j<a.length; ++j) {
              if(a[i] === a[j])
                  a.splice(j--, 1);
          }
      }

     return a;
 }


module.exports = get_union;
