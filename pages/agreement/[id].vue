<script setup lang="ts">
const route = useRoute()
import {useTitleStore} from "~/store/useDetailLayouts";
import ModuleCard from "~/component/moduleCard.vue";

definePageMeta({
  layout: 'detail'  // 使用指定的布局
})
const titleStore = useTitleStore();
// 设置页面标题
titleStore.setTitle('');
</script>

<template>
{{ route.params.id}}
</template>

<style scoped>

</style>