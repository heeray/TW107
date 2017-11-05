'use strict';
var ss=true;
function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  for(var i=0;i<collection_a.length;)
  {
    if(collection_a[i]===collection_b[i])
    i++;
  }
  return ss;
}

module.exports = compare_collections;


