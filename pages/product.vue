<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";

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
    
    <div></div>

  </div>


  <van-action-bar>
    <van-action-bar-icon icon="share-o" text="分享" @click="onClickShare"/>
    <van-action-bar-icon icon="shop-o" text="首页" url="/"/>
    <van-action-bar-button type="danger" text="立即购买 进入队伍" @click="onCliCKBuy"/>
  </van-action-bar>
</template>

<style scoped>
</style>
