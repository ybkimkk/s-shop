<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";
import ModuleCard from "~/component/moduleCard.vue";

definePageMeta({
  layout: 'detail'  // 使用指定的布局
})
const titleStore = useTitleStore();
// 设置页面标题
titleStore.setTitle('切换账号');
</script>

<template>
  <module-card>
    <div class="flex justify-between items-center">
      <van-image round width="50px" height="50px" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      <div class="p-s-2">
        <p class="m-b-1">ybkim</p>
        <van-tag type="success" size="medium">当前账号</van-tag>
      </div>
      <div class="flex-1 text-align-right">
        <van-button plain type="danger" size="small">退出</van-button>
      </div>
    </div>
  </module-card>
  <module-card>
    <div class="flex justify-between items-center">
      <van-image round width="50px" height="50px" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      <div class="p-s-2">
        <p class="m-b-1">ybkim</p>
        <van-tag type="success" size="medium">当前账号</van-tag>
      </div>
      <div class="flex-1 text-align-right">
        <van-button plain type="danger" size="small">退出</van-button>
      </div>
    </div>
  </module-card>
  <module-card>
    <div class="flex justify-between items-center">
      <van-image round width="50px" height="50px" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      <div class="p-s-2">
        <p class="m-b-1">ybkim</p>
        <van-tag type="success" size="medium">当前账号</van-tag>
      </div>
      <div class="flex-1 text-align-right">
        <van-button plain type="danger" size="small">退出</van-button>
      </div>
    </div>
  </module-card>
  
  <div class="text-center m-t-5">
    <nuxt-link to="/login" class="color-red"><van-icon name="plus" />添加新账号</nuxt-link>
  </div>
</template>

<style scoped>

</style>