<template>
  <div>
    <input type="text" v-model="todoValue" @keyup.enter="setTodoValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ref } from "vue";
import { IUseTodo, useTodo } from "@/hooks";

export default defineComponent({
  name: "Todo-Input",
  setup() {
    const todoValue = ref<string>("");
    const { setTodo }: IUseTodo = useTodo();

    const setTodoValue = (e: KeyboardEvent): void => {
      if (todoValue.value.trim().length) {
        setTodo(todoValue.value);
        todoValue.value = "";
      }
    };
    return {
      todoValue,
      setTodoValue,
    };
  },
});
</script>

<style>
</style>