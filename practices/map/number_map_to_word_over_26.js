'use strict';
var number_map_to_word_over_26 = function(collection){
  var arr=[];
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]>26)
      {
        var n1=collection[i]%26;
        var n2=parseInt(collection[i]/26);
        if(n1==0)
        {
           arr.push(String.fromCharCode(n2-1+96)+String.fromCharCode(26+96));
        }
        else
        {
          arr.push(String.fromCharCode(n2+96)+String.fromCharCode(n1+96));
        }        
      }
      else{
         arr.push(String.fromCharCode(collection[i]+96));
    }
  }
  return arr;
};

module.exports = number_map_to_word_over_26;
