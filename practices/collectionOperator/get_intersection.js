'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let arr=[];
	collection_b.forEach((a)=>{
		if(collection_a.indexOf(a)!=-1)
			arr.push(a);
	});
  return arr;
}

module.exports = get_intersection;
