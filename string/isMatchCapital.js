//判斷大小寫 只要有大寫就true
function isMatchCapital(str) {
  for (var i=0; i<str.length; i++){
      if (str[i] >= 'A' && str[i] <= 'Z') {
      return true;
    }
  }
  return false;
}

function isMatchCapital(str){
  for (var i=0; i<str.length; i++){
    if (str[i] === str[i].toUpperCase()) {
      return true;
    }
  }
  return false;
}

function isMatchCapital(str){
  for (var i=0; i<str.length; i++){
    if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
      return true;
    }
  }
  return false;
}