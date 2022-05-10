<template>
  <div class="form-group">
    <label for="addItem">添加事项</label>
    <input
      type="text"
      class="form-control"
      id="addItem"
      aria-describedby="emailHelp"
      v-model="inputValue"
      @keydown.enter="addList(inputValue)"
    />
    <small id="emailHelp" class="form-text text-muted">回车即可添加</small>

    <ul class="list-group">
      <li
        v-for="(item, index) in todos"
        :key="index"
        class="list-group-item d-flex align-item-center justify-content-between"
      >
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            :id="'itemcheck' + index"
            @click.prevent="checkList(index)"
          />
          <label class="form-check-label" :for="'itemcheck' + index">{{
            item
          }}</label>
        </div>
        <div class="float-right">
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteList(index)"
          >
            删除
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, ref } from "@vue/runtime-core";
import store from "@/store";

export default defineComponent({
  name: "Add",
  setup() {
    const inputValue = ref("");
    const addList = (value) => {
      if (value.trim() === "") return;
      store.commit("add", value);
      inputValue.value = "";
    };
    const deleteList = (index) => {
      store.commit("delete", index);
    };
    const checkList = (index) => {
      store.commit("check", index);
    };

    return reactive({
      inputValue,
      todos: computed(() => store.state.todos),
      addList,
      deleteList,
      checkList
    });
  },
});
</script>

<style>
</style>