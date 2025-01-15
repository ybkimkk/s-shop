<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";
import ModuleCard from "~/component/moduleCard.vue";

definePageMeta({
  layout: 'detail'  // 使用指定的布局
})
const titleStore = useTitleStore();
// 设置页面标题
titleStore.setTitle('收货地址');
</script>

<template>
  <module-card v-for="item in 10">
    <nuxt-link to="/notice/detail">
      <p class="font-size-4">视频会议</p>
      <p class="color-neutral  m-y-3">2024.1.1</p>
      <p class="color-red">查看详情
        <van-icon name="arrow"/>
      </p>
    </nuxt-link>
  </module-card>
</template>

<style scoped>

</style>