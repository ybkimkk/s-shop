<script setup lang="ts">


import {useTitleStore} from "~/store/useDetailLayouts";

definePageMeta({
  layout: 'login'  // 使用指定的布局
})
const titleStore = useTitleStore();
// 设置页面标题
titleStore.setTitle('登录');

</script>

<template>12

</template>

<style scoped>

</style>