'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let arr=[];
  if(number_a<number_b)
  {
    for(var i = number_a;i<=number_b;i++)
    {
      if(i%2==0)
      {
        arr.push(i);
      }
    }
    return arr;
  }
  else if(number_a>number_b)
  {
    for(var i = number_a;i>=number_b;i--)
    {
      if(i%2==0)
      {
        arr.push(i);
      }
    }
    return arr;
  }
  else if(number_a==number_b)
  {
    if(number_a%2!=0)
    {
      arr.push();
    }
    else{
      arr.push(number_a);
    }
    return arr;
  }

}

module.exports = get_integer_interval_2;
