<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";

definePageMeta({
  layout: 'detail'  // 使用指定的布局
})
const active = ref(0);
const titleStore = useTitleStore()
// 设置页面标题
titleStore.setTitle('我的订单')
</script>

<template>
  <van-tabs v-model:active="active">
    <van-tab title="全部">
        <van-empty image="search" description="暂无订单"/>
    </van-tab>
    <van-tab title="待发货">
      <van-empty image="search" description="暂无订单"/>
    </van-tab>
    <van-tab title="待收货">
      <van-empty image="search" description="暂无订单"/>
    </van-tab>
    <van-tab title="已完成">
      <van-empty image="search" description="暂无订单"/>
    </van-tab>
  </van-tabs>
</template>

<style scoped>

</style>