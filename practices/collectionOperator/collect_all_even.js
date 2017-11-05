'use strict';

function collect_all_even(collection) {
  let arr= [];
  collection.forEach((a) =>{
    if(collection.indexOf(a)%2!=0)
			arr.push(a);
      });
  return arr;
}

module.exports = collect_all_even;
