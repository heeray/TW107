'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var arr=[];

  if(number_a<number_b)
  {
    for(var i =number_a;i<=number_b;i++)
    {
      if(i>26)
      {
        var n1=i%26;
        var n2=parseInt(i/26);
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
         arr.push(String.fromCharCode(i+96));
      }
    }
    return arr;
  }
  else if(number_a>number_b)
  {
    for(var i = number_a;i>=number_b;i--)
    {
        if(i>26)
      {
        var n1=i%26;
        var n2=parseInt(i/26);
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
         arr.push(String.fromCharCode(i+96));
    }
    }
    return arr;
  }
  else if(number_a==number_b)
  {
     if(number_a>26)
      {
        var n1=number_a%26;
        var n2=parseInt(number_a/26);
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
         arr.push(String.fromCharCode(number_a+96));
    }
    return arr;
  }
}

module.exports = get_letter_interval_2;

