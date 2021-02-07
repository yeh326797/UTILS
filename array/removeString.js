//給你一個陣列裡面是不規則的類型，回傳另一個陣列是排除字串的給我
//['123',123,true,null,undefined] >function > [123,true,null,undefined]
  

function removeString(arr) {
    var tmp=[];
    
    for(var i=0; i<arr.length; i++) {
      if(typeof(arr[i]) !== "string"){
        tmp.push(arr[i]);
      }
    }
    return tmp;
  }