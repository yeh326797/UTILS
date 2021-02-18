var array = [
  {
    name: 'Casper',
    like: '鍋燒意麵',
    age: 18
  },
  {
    name: 'Wang',
    like: '炒麵',
    age: 24
  },
  {
    name: 'Bobo',
    like: '蘿蔔泥',
    age: 1
  },
  {
    name: '滷蛋',
    like: '蘿蔔泥',
    age: 3
  }
];

// 檢測陣列中的物件的條件式 age > 10，只要有一個不符合就回傳false，全部都符合回傳true

var result = array.every(function(person){
  return person.age>10
})