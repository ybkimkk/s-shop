<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";
definePageMeta({
  layout: 'detail'  // 使用指定的布局
})
const videoOptions = {
  autoplay: true,
  sources: [
    { src: 'https://app.yammevli.cn/cdn/intro.mp4', type: 'video/mp4' }
  ]
}
const titleStore = useTitleStore()
// 设置页面标题
titleStore.setTitle('玩法介绍')
</script>
<template>
<!--  <video-player class="video-player" :options="videoOptions" />-->
  <video id="video" class="video-js" controls>
    <source src="https://app.yammevli.cn/cdn/intro.mp4" type="video/mp4" />
<!--    <source src="https://path-to-your-video.webm" type="video/webm" />-->
  </video>

</template>

<style scoped>
#video {
  width: 100%;
height: 500px;
  margin: 0 auto;
}
</style>