<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";
import AmountCard from "~/component/amountCard.vue";

definePageMeta({
  layout: 'detail'  // 使用指定的布局
})
const titleStore = useTitleStore();
// 设置页面标题
titleStore.setTitle('我的收益');


</script>

<template>
  <amount-card>
    <van-space>
      <van-button url="/settings/earnings" color="white" style="background: none" round plain hairline text="转账"
                  size="small"/>
      <van-button url="/settings/earnings" color="white" style="background: none" round plain hairline text="提现"
                  size="small"/>
    </van-space>
  </amount-card>
  <van-tabs v-model:active="active">
    <van-tab title="标签 1">内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
  </van-tabs>
</template>

<style scoped>

</style>