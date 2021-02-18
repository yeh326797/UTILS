var data = [
  {
    mid: 785541,
    cid: 61,
    count: 1,
    date: "",
    favorite: false,
    name: "印度班加罗尔超级联赛",
    priority: 190088,
    sid: 1,
    tid: 8511,
  }, {
    mid: 885644,
    cid: 0,
    count: 5,
    date: "",
    favorite: false,
    name: "柬埔寨总理杯",
    priority: 190116,
    sid: 1,
    tid: 11185,
  }, {
    mid: 546023,
    cid: 61,
    count: 1,
    date: "",
    favorite: false,
    name: "印度沙希德曼诺兰锦标赛",
    priority: 195942,
    sid: 1,
    tid: 20722,
  },
]

var midVaule = data[i].mid
var midData={
  midVaule:{}
}
for (var i=0; i<data.length;i++){
  console.log(midVaule)
}



// 最後輸出：
// {
//   [mid] : { },
//   [mid] : { },
//   [mid] : { },
// }

// example：
var output = {
  785541: {
    mid: 785541,
    cid: 61,
    count: 1,
    date: "",
    favorite: false,
    name: "印度班加罗尔超级联赛",
    priority: 190088,
    sid: 1,
    tid: 8511,
  },
  885644: {},
  546023: {},
}

var newData={}
data.forEach(function (item) {
  newData[data[item]].mid] = item;
})

console.log(newData)

//forEach會打亂順序，map不會


var newData={}
data.map(function (item) {
  newData[data[item]].mid] = item;
})

console.log(newData)