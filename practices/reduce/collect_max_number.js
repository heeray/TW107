'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var arr=collection.sort(sortNumber);
  return arr[0];
}
function sortNumber(a,b)
{
return b-a;
}

module.exports = collect_max_number;
