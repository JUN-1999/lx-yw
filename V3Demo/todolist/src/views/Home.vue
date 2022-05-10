<template>
  <div class="container">
    <h3 class="d-flex align-item-center">
      <div class="logo mr-2"></div>
      <span>TodoList</span>
    </h3>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link class="nav-link" to="/add">待办事项</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/done">已完成</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/delete">已删除</router-link>
      </li>
    </ul>
    <div class="contaienr">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup(){
    
  }
};
</script>

<style lang="scss" scoped>
.logo {
  background: url("~@/assets/logo.png") no-repeat center center;
  background-size: contain;
  width: 40px;
  height: 40px;
}
.active{
  font-weight: 800;
}
</style>
