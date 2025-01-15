<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";
import AmountCard from "~/component/amountCard.vue";

definePageMeta({
  layout: 'detail'  // 使用指定的布局
})
const titleStore = useTitleStore();
// 设置页面标题
titleStore.setTitle('我的收益');

const active = ref(0);
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
  <van-tabs class="m-t-3" v-model:active="active">
    <van-tab title="推荐">an-tab title="全部">
      <van-empty image="search" description="暂无订单"/>
    </van-tab>
    <van-tab title="分红">an-tab title="全部">
      <van-empty image="search" description="暂无订单"/>
    </van-tab>
    <van-tab title="提现">an-tab title="全部">
      <van-empty image="search" description="暂无订单"/>
    </van-tab>
    <van-tab title="转账">an-tab title="全部">
      <van-empty image="search" description="暂无订单"/>
    </van-tab>
    <van-tab title="余额">an-tab title="全部">
      <van-empty image="search" description="暂无订单"/>
    </van-tab>
  </van-tabs>
</template>

<style scoped>

</style>