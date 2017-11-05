'use strict';

function double_to_one(collection) {

  //在这里写入代码
collection=[].concat.apply([],collection);
  for(var i=0;i<collection.length;i++){
    for(var j=i+1;j<collection.length;j++)
    {
       if(collection[i] === collection[j])
        collection.splice(j--, 1);
    }
  }
  return collection;
}

module.exports = double_to_one;
