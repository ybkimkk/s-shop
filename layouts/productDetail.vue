<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";

const onClickLeft = () => history.back();
const titleStore = useTitleStore()

</script>

<template>
  <van-nav-bar
      :title="titleStore.title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
  />
  <div class="p-3 p-b-15">
    <NuxtPage/>
  </div>
</template>

<style scoped>
</style>