'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var arr=[];
  if(number_a<number_b)
  {
    for(var i = number_a;i<=number_b;i++)
    {
        arr.push(String.fromCharCode(i+96));
    }
    return arr;
  }
  else if(number_a>number_b)
  {
    for(var i = number_a;i>=number_b;i--)
    {
        arr.push(String.fromCharCode(i+96));
    }
    return arr;
  }
  else if(number_a==number_b)
  {
     arr.push(String.fromCharCode(number_a+96));
    return arr;
  }
}

module.exports = get_letter_interval;
