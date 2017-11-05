'use strict';

function compute_median(collection) {
  //在这里写入代码
  var n=parseInt(collection.length/2);
  if(collection.length%2!=0)
  {
    return collection[n];
  }
  else
  {
    return (collection[n]+collection[n+1])/2;
  }
  
  
}

module.exports = compute_median;


