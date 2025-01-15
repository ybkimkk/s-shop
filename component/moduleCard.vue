<script setup lang="ts">
defineProps({
  title: String
})
</script>

<template>
  <div class="bg-white p-3 m-t-5 rd-lg">
    <h1 class="m-y-3">{{ title }}</h1>
    <slot/>
  </div>
</template>

<style scoped>

</style>