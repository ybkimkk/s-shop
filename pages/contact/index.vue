<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";

definePageMeta({
  layout: 'detail'  // 使用指定的布局
})
const titleStore = useTitleStore();
// 设置页面标题
titleStore.setTitle('联系客服');
</script>

<template>
  <van-image src="	https://app.yammevli.cn/assets/kefu-BXhxGdKB.jpg"></van-image>
</template>

<style scoped>

</style>