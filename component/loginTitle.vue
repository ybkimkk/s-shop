<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  homeLink: {
    type: Boolean,
    default:true
  }
})
</script>

<template>
  <div class="flex justify-between items-center m-y-6 m-x-5">
    <p class="font-size-5">{{ title }}</p>
    <nuxt-link v-if="homeLink" to="/">
      <van-tag round plain type="danger" size="large">首页</van-tag>
    </nuxt-link>
  </div>
</template>

<style scoped>

</style>