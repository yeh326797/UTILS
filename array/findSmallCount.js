function findSmallCount(array, n) {
  var tmp = [];

  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    if (array[i] < n) {
      tmp.push(array[i]);
    }
  }
  return tmp;
}