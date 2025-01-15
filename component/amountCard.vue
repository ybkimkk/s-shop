<script setup lang="ts">
const myAmount = [
  {title: '累计收益', amount: 0},
  {title: '推荐收益', amount: 0},
  {title: '分红收益', amount: 0},
  {title: '超级积分', amount: 0},
]
</script>

<template>
  <div style="background: #D80010" class="p-2 color-white rd-lg m-t-5">
    <div class="flex justify-between items-start">
      <div>
        <h3 class="m-y-0 m-b-3">余额(元)</h3>
        <h1 class="m-y-2 font-size-10">0</h1>
      </div>
      <div class="flex justify-between items-center">
        <slot/>
     
      </div>
    </div>
    <van-row gutter="8">
      <van-col span="6" v-for="(item, index) in myAmount" :key="index">
        <div class="glass b-r-10">
          <p class="m-b-3 font-size-3">{{ item.title }}</p>
          <p>{{ item.amount }}</p>
        </div>
      </van-col>
    </van-row>
  </div>

</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.2); /* 半透明背景 */
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  color: #fff;
  padding: .625rem;
}
</style>