// 回傳陣列裡面所有小於 n 的數的總和
function sumSmallCount(array, n) {
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    if (array[i] < n) {
      sum += num;
    }
  }
  return sum;
}