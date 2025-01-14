<script setup lang="ts">

// 获取路由对象
const route = useRoute()


// 定义 Tabbar 激活状态
const active = ref(0)

// 定义一个包含路径的映射
const paths = ['/', '/settings']

onMounted(() => {
  const currentPath = route.path
  const currentIndex = paths.indexOf(currentPath)
  active.value = currentIndex !== -1 ? currentIndex : 0  // 确保有默认值

  watch(
      () => route.path,
      (newPath) => {
        const newIndex = paths.indexOf(newPath)
        if (newIndex !== -1) {
          active.value = newIndex
        }
      },
      {immediate: true}
  )
})
</script>

<template>
<div class="container-page">
  <slot/>
  <footer>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" url="/">首页</van-tabbar-item>
      <van-tabbar-item icon="setting-o" url="/settings">我的</van-tabbar-item>
    </van-tabbar>
  </footer>
</div>
</template>

<style scoped>
.container-page {
  padding-bottom:100px;
}
</style>