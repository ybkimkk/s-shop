<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";
import ModuleCard from "~/component/moduleCard.vue";

definePageMeta({
  layout: 'detail'  // 使用指定的布局
})

const titleStore = useTitleStore()
// 设置页面标题
titleStore.setTitle('商品详情');

const onClickShare = () => {

}

const onCliCKBuy = () => {

}
</script>

<template>
  <div class="container-page">
    <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
    <div class="p-x-2">
      <h1 class="color-red font-size-10 m-y-2">¥600</h1>
      <h3>桦褐孔菌复合固体饮料</h3>
    </div>
    <module-card title="商品参数">
      <div class="flex justify-between">
        <p class="color-neutral font-size-4">规格</p>
        <p class="font-size-4">1盒*16包</p>
      </div>
      <van-divider />
      <div class="flex justify-between">
        <p class="color-neutral font-size-5">运费</p>
        <p class="font-size-4">免运费</p>
      </div>
    </module-card>
    
    <module-card title="商品详情">
      <van-image v-for="index in 4" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
    </module-card>
    <div>

    </div>

  </div>


  <van-action-bar>
    <van-action-bar-icon icon="share-o" text="分享" @click="onClickShare"/>
    <van-action-bar-icon icon="shop-o" text="首页" url="/"/>
    <van-action-bar-button type="danger" text="立即购买 进入队伍" @click="onCliCKBuy"/>
  </van-action-bar>
</template>

<style scoped>
</style>
