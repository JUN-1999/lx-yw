import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/index'

createApp(App).use(store).use(router).mount('#app')

// config App实例的配置项

/**
 * app.config.errorHandler=(err,vm,info)=>{
 * 
 * }
 * 
 * 
 *  在vue实例全局挂载 utils 工具类
 *  app.config.globalProperties.utils=utils
 *  在组件中使用的
 *  const {ctx}=getCurrentInstance(); // 获取到整个组件实例的上下文，和setup(props,ctx)中的ctx有区别（setup中的ctx指的是setup执行的上下文，内容不一样）
 *  const {utils}=ctx;
 *  console.log(utils.plus(1,2))
 */