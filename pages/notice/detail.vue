<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";
import ModuleCard from "~/component/moduleCard.vue";

definePageMeta({
  layout: 'detail'  // 使用指定的布局
})
const titleStore = useTitleStore();
// 设置页面标题
titleStore.setTitle('公告详情');
</script>

<template>
  <module-card>
    <div class="m-b-5">
      <p class="color-red font-size-4">2025/01/14 14:35:29</p>
    </div>
    ‼️会议通知 1月14日晚20点‼️<br>
    分享嘉宾：李辛泽 何丰余️<br>
    内容：️<br>
    ❶平台介绍️<br>
    ❷模式拆解️<br>
    ❸市场开拓️<br>
    ❹风险评估️<br>
    ❺嘉宾分享️<br>
    1月14日晚20点红包雨开场，通知所有人务必准时到场。️<br>
    #腾讯会议：706-957-380️<br>
    点击链接入会：️<br>
    https://meeting.tencent.com/dm/pwTcVqvimTK3
  </module-card>
</template>

<style scoped>

</style>