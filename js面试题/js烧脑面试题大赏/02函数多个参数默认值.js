function a (b = c, c = 1) {
    console.log(b, c)
  }
  a()

//   报错

/* 
给函数多个参数设置默认值实际上跟按顺序定义变量一样，
所以会存在暂时性死区的问题，
即前面定义的变量不能引用后面还未定义的变量，而后面的可以访问前面的。
*/