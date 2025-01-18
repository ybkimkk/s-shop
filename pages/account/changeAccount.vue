<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";
import ModuleCard from "~/component/moduleCard.vue";

definePageMeta({
  layout: 'detail'  // 使用指定的布局
})
const titleStore = useTitleStore();
// 设置页面标题
titleStore.setTitle('切换账号');

interface Account {
  avatar: string;
  name: string;
  selected: boolean;
}

const aItemDatas = ref([
  {
    avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    name: 'ybkim',
    seleced: true
  },
  {
    avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    name: 'ybkim2',
    seleced: false
  },
  {
    avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    name: 'ybkim3',
    seleced: false
  }
])

const onExitClick = function (){

}

const onChangeClick = function (){

}

</script>

<template>
  <template v-for="item in aItemDatas">
    <module-card>
      <div class="flex justify-between items-center">
        <van-image round width="50px" height="50px" :src=item.avatar />
        <div class="p-s-2">
          <p class="m-b-1">{{ item.name }}</p>
          <template v-if="item.seleced">
            <van-tag type="success" size="medium">当前账号</van-tag>
          </template>
        </div>
        <div class="flex-1 text-align-right">
          <template v-if="item.seleced">
            <van-button plain type="danger" size="small" :click="onExitClick">退出</van-button>
          </template>
          <template v-else>
            <van-button plain type="danger" size="small" :click="onChangeClick">切换</van-button>
          </template>
        </div>
      </div>
    </module-card>
  </template>
  <div class="text-center m-t-5">
    <nuxt-link to="/login"><p  class="color-red"><van-icon name="plus" />添加新账号</p></nuxt-link>
  </div>
</template>

<style scoped>

</style>