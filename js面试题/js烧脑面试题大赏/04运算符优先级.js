var a = {n:1} // ==> {n:1}
var b = a // ==> {n:1}
a.x = a = {n:2}  // ==> {n:1,x:undefined}(先执行a.x) ==> a={n:2} (a指向一个新对象) ==> {n:1,x:{n:2}}(这是存在原来a，也是b的以前的对象)
console.log(a.x) // undefined  
console.log(b.x) // {n:2}


/* 
反正按照网上大部分的解释是因为.运算符优先级最高，
所以会先执行a.x， （给a对象建立一个key为x 值为  undefined ）
此时a、b共同指向的{n: 1}变成了{n: 1, x: undefined}，
然后按照连等操作从右到左执行代码，a = {n: 2}，
显然，a现在指向了一个新对象，
然后a.x = a，因为a.x最开始就执行过了，
所以这里其实等价于：({n: 1, x: undefined}).x = b.x = a = {n: 2}。
*/