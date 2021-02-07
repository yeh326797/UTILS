//判斷大小寫 丟一個字串進去 最後結果出來要跟我說字首大寫是大寫還是不是大寫

function capitalFirst(str) {
  return str[0] >= 'A' && str[0] <= 'Z';
}

function capitalFirst(str) {
  return str[0] === str[0].toUpperCase();
}

function capitalFirst(str) {
  return str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90;
}