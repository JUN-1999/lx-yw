var arr = [0, 1, 2]
arr[10] = 10
console.log(arr.filter(function (x) {
  return x === undefined
}))

// 打印：[]

/* 
这题比较简单，arr[10]=10，
那么索引3到9位置上都是undefined，arr[3]等打印出来也确实是undefined，
但是，这里其实涉及到ECMAScript版本不同对应方法行为不同的问题，
ES6之前的遍历方法都会跳过数组未赋值过的位置，也就是空位，
但是ES6新增的for of方法就不会跳过。
*/