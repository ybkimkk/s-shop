<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
})

</script>

<template>
  <div class="bg-white p-3 m-t-5 rd-lg">
    <h1 v-if="title!==''" class="m-y-3">{{ title }}</h1>
    <slot/>
  </div>
</template>

<style scoped>

</style>