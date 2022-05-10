<template>
  <ul class="list-group">
    <li
      v-for="(item, index) in doneList"
      :key="index"
      class="list-group-item d-flex align-item-center justify-content-between"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
import { computed, defineComponent, reactive, ref } from "@vue/runtime-core";
import store from "@/store";

export default defineComponent({
  name: "Done",
  setup() {
    const doneList = computed(() => store.state.dones);
    return reactive({
      doneList,
    });
  },
});
</script>

<style>
</style>