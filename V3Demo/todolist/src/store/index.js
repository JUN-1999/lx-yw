import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [],
    dones: [],
    deletes: []
  },
  mutations: {     // 同步的操作方法
    // 添加的方法
    add(state, value) {
      state.todos.push(value)
    },
    // 删除的方法
    delete(state, index) {
      const item = state.todos[index];
      state.todos.splice(index, 1);
      state.deletes.push(item);
    },
    // 已完成的方法
    check(state, index) {
      const item = state.todos[index];
      state.todos.splice(index, 1);
      state.dones.push(item);
    }
  },
  actions: {     // 异步的操作方法

  },
  modules: {
  }
})
