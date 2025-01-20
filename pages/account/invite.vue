<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";
import {showToast} from "vant";
import type {Invite, InviteAPI} from "~/types/invite";

definePageMeta({
  layout: 'detail'
})
const InviteData = ref<Invite>();
const titleStore = useTitleStore()
// 设置页面标题
titleStore.setTitle('邀请');

const onClickCopy = () => {
  const url = InviteData.value?.InviteCode || '';
  navigator.clipboard.writeText(url).then(() => {
    showToast("复制成功")
  }).catch((err) => {
    showToast("复制失败")
  });
}

const onDownloadCopy = () => {
  const link = document.createElement('a');
  link.href = InviteData.value?.imgSrc || '';
  link.download = 'image.png';
  link.click();
}

onMounted(async () => {
  let res = <InviteAPI>await useNuxtApp().$axios.get("/user/invite");
  // TODO  这里 貌似可以不用判断吧? 拦截器里面做判断了----
  InviteData.value = res.data.data;
})
</script>
<template>
  <div class="container-page flex justify-center items-center p-b-15">
    <van-image :src="InviteData?.imgSrc" width="100%"></van-image>
  </div>
  <van-action-bar>
    <van-action-bar-button type="warning" text="下载" @click="onDownloadCopy"/>
    <van-action-bar-button type="danger" text="复制" @click="onClickCopy"/>
  </van-action-bar>
</template>

<style scoped>
</style>