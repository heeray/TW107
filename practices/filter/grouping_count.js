'use strict';

function grouping_count(collection) {

  //在这里写入代码
let arr = {};
	collection.forEach((a)=>{
    let p ;
	p = arr.findIndex((b)=> {
		return b.key == a;
		});
		if(p == -1){
			arr[p]=1;
		}
		else{
			arr[p]++;
		}
	});
	return arr;
  
 }

module.exports = grouping_count;
