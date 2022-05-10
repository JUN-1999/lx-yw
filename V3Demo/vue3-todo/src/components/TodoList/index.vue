<template>
  <div>
    <h1>Todo-List</h1>
    <todo-item
      v-for="item of todoList"
      :key="item.id"
      :item="item"
      @removeTodo="removeTodo"
      @setStatus="setStatus"
      @setDoing="setDoing"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { PropType } from "vue";
import TodoItem from "./item.vue";
import { ITodo } from "@/typings";
import { IUseTodo, useTodo } from "@/hooks";

export default defineComponent({
  name: "Todo-List",
  props: {
    todoList: Array as PropType<ITodo[]>,
  },
  components: {
    TodoItem,
  },
  setup(props, { emit }) {
    const { removeTodo, setStatus, setDoing }: IUseTodo = useTodo();

    return {
      removeTodo,
      setStatus,
      setDoing,
    };
  },
});
</script>

<style>
</style>