'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var arr=collection.sort(sortNumber);
  return arr[arr.length-1];
}
function sortNumber(a,b)
{
return b-a;
}

module.exports = collect_min_number;

