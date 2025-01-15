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
  <div class="login-container p-3 l-bg">
    <div class="h-full ">
      <NuxtPage/>
    </div>
  </div>
</template>
<style>
html, body {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  width: 100%;
  height: 100%;

}

#__nuxt {
  height: 100%;
}

</style>
<style scoped>

.login-container {
  height: calc(100vh - 82px);
  background: rgb(243,250,253);
  background: linear-gradient(45deg, rgba(243,250,253,1) 0%, rgba(253,238,240,1) 100%);
}

</style>