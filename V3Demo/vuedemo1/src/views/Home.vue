<template>
  <div class="container">
    <h1>Vue3 TodoList —— by JUN</h1>

    <h3>
      共有<span class="text-primary">{{ list.length }}</span>
      事项，完成了
      <span class="text-success">{{ finishList.length }} </span>
      项事
    </h3>

    <h3>代办事项</h3>
    <ul class="list-group">
      <tempalte :key="index" v-for="(item, index) in list">
        <li
          class="list-group-item d-flex justify-content-between"
          v-if="item.isFinish == false"
        >
          <div class="form-group form-check mb-0">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="item.isFinish"
            />
            <label
              class="form-check-label"
              @dblclick="item.isEdit = !item.isEdit"
              :for="'check' + index"
              v-if="!item.isEdit"
              >{{ item.name }}</label
            >
            <label class="form-check-label" v-else>
              <input
                type="text"
                v-model="item.name"
                @blur="item.isEdit = !item.isEdit"
              />
            </label>
          </div>
          <button
            type="button"
            @click="closeList(index)"
            class="close"
            aria-label="关闭"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </li>
      </tempalte>
    </ul>

    <h3>完成事项</h3>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(item, index) in finishList"
        :key="'finish' + index"
      >
        <div class="form-group form-check">
          <input
            type="checkbox"
            class="form-check-input"
            :id="'finish' + index"
            disabled
          />
          <label class="form-check-label" :for="'finish' + index">{{
            item.name
          }}</label>
        </div>
      </li>
    </ul>

    <h3>添加新的事项</h3>
    <input
      type="text"
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-lg"
      placeholder="输入新的事项"
      v-model="newlistItem"
      @keydown.enter="addListItem"
    />
    <button
      type="button"
      @click="addListItem"
      class="btn btn-primary btn-lg btn-block"
    >
      添加事项
    </button>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "@vue/reactivity";
// @ is an alias to /src

export default {
  name: "Home",
  /**
   * 1.展示代办事项 √
   * 2.展示完成事项，不能编辑 √
   * 3.双击可编辑
   * 4.删除
   * 5.有个选择框，选择之后为已经完成的事项 √
   * 6.添加新的任务
   */
  setup() {
    const addListItem = () => {
      state.list.push({
        name: state.newlistItem,
        isEdit: false,
        isFinish: false,
      });
      state.newlistItem = "";
    };
    const closeList = (index) => {
      state.list.splice(index, 1);
    };
    const state = reactive({
      newlistItem: "",
      list: [
        { name: "1", isEdit: false, isFinish: false },
        { name: "2", isEdit: false, isFinish: false },
        { name: "3", isEdit: false, isFinish: false },
      ],
      finishList: computed(() =>
        state.list.filter((item) => item.isFinish == true)
      ),
      addListItem,
      closeList
    });

    return toRefs(state);
  },
};
</script>
