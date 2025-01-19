<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";
import ModuleCard from "~/component/moduleCard.vue";
import type { Notice, NoticeAPI } from "~/types/notice";

definePageMeta({
  layout: 'detail'  // 使用指定的布局
})
const titleStore = useTitleStore();
// 设置页面标题
titleStore.setTitle('公告详情');

const route = useRoute();

const oNotice = ref<Notice>()

onMounted(async ()=>{

  //公告获取
  let reqNotice = <NoticeAPI> await useNuxtApp().$axios.get(`/notice/${route.params.id}`)
  if (reqNotice.data.code === 0) oNotice.value = reqNotice.data.data

})

</script>

<template>
  <module-card>
    <div class="m-b-5">
      <p class="color-red font-size-4">{{ oNotice?.createBy }}</p>
    </div>
    <div v-html="oNotice?.content"/>
  </module-card>
</template>

<style scoped>

</style>