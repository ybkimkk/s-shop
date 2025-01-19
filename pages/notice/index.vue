<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";
import ModuleCard from "~/component/moduleCard.vue";
import type { Notice, NoticeListAPI } from "~/types/notice";

definePageMeta({
  layout: 'detail'  // 使用指定的布局
})
const titleStore = useTitleStore();
// 设置页面标题
titleStore.setTitle('公告');

const aNotices = ref<Notice[]>()

onMounted(async () => {
  
  //公告列表
  let reqNoticeList = <NoticeListAPI> await useNuxtApp().$axios.get('/notice/list')
  if (reqNoticeList.data.code === 0) aNotices.value = reqNoticeList.data.data

})

</script>

<template>
  <module-card v-for="item in aNotices">
   <nuxt-link :to="'/notice/detail/'+item.id">
     <p class="font-size-4">{{ item.title }}</p>
     <p class="color-neutral  m-y-3">{{ item.createBy }}</p>
     <div v-html="item.content" class="color-neutral  m-y-3"/>
     <p class="color-red">查看详情
       <van-icon name="arrow"/>
     </p>
   </nuxt-link>
  </module-card>
</template>

<style scoped>

</style>