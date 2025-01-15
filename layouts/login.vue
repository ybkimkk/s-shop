<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";

const onClickLeft = () => history.back();
const titleStore = useTitleStore()
</script>

<template>
  <van-nav-bar
      left-text="返回"
      left-arrow
      :title="titleStore.title"
      @click-left="onClickLeft"
  />
  <div class="p-3 l-bg">
    <NuxtPage/>
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  background-image: url(https://app.yammevli.cn/assets/login_bg-B9IZgNkK.png);

}

</style>