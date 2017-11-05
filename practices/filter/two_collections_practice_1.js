'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
let arr=[];
	collection_a.forEach((a)=>{
		if(collection_b.indexOf(a)!=-1)
			arr.push(a);
	});
  return arr;  
}

module.exports = choose_common_elements;
