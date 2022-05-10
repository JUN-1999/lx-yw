// 知识点：声明提前

/* let a = 1
function b(a) {
    a = 2
    console.log(a)
}
b(a)
console.log(a)

打印：
2
1 */

// 首先基本类型数据是按值传递的，
// 所以执行b函数时，b的参数a接收的值为1，参数a相当于函数内部的变量，
// 当本作用域有和上层作用域同名的变量时，无法访问到上层变量，
// 所以函数内无论怎么修改a，都不影响上层，所以函数内部打印的a是2，外面打印的仍是1。

/*
 function b() {
  a = 2
  console.log(a)
}
 let a;
 a=1;
b() // 当不传入a实参的时候，函数内用的就是全局变量
console.log(a)

打印：
2
2
 */


/* function test() {

    function a() { console.log('函数先输出') }
    var a;  //上面的函数已经声明，相同的变量名声明会被忽略
    console.log(a)   // 是函数本身

    a = '变量先输出'
}

test() */




// 终极例题

console.log(xxp)   //‘undefined’

var xxp= 1

function fn() {undefined

   console.log(xxp)  // 函数本身    function xxp() { console.log(xxp)}

   var xxp= 2

   function xxp() { console.log(xxp)}

   console.log(xxp)    // 2

   xxp()    //报错

}

fn()
