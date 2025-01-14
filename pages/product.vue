<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";

definePageMeta({
  layout: 'detail'  // 使用指定的布局
})



const titleStore = useTitleStore()
// 设置页面标题
titleStore.setTitle('1123')
</script>

<template>
  <div>{{ titleStore.title }}</div> <!-- 直接使用 title 的响应式引用 -->
</template>

<style scoped>
</style>
