<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";
import ModuleCard from "~/component/moduleCard.vue";

definePageMeta({
  layout: 'product-detail'  // 使用指定的布局
})

const titleStore = useTitleStore()
// 设置页面标题
titleStore.setTitle('收货地址');


const onCliCKAddAddress = () => {

}
</script>

<template>
  <div class="container-page">
    <van-empty image="search" />


  </div>


  <van-action-bar>
    <van-action-bar-button url="/settings/addAddress" type="danger" text="添加新地址" @click="onCliCKAddAddress"/>
  </van-action-bar>
</template>

<style scoped>
</style>
