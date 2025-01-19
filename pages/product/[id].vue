<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";
import ModuleCard from "~/component/moduleCard.vue";
import type { Product, ProductAPI } from "~/types/product";

definePageMeta({
  layout: 'product-detail'  // 使用指定的布局
})
const route = useRoute()
const router = useRouter();

const titleStore = useTitleStore()
// 设置页面标题
titleStore.setTitle('商品详情');

const oProduct = ref<Product>()

onMounted(async () => {
  
  //商品
  try {
    let reqProduct = <ProductAPI> await useNuxtApp().$axios.get(`/product/${route.params.id}`)
    if (reqProduct.data.code === 0) oProduct.value = reqProduct.data.data
  } catch (error) {
    router.push('/')
  }

  
})

const onClickShare = () => {

}

const onCliCKBuy = () => {

}
</script>

<template>
  <div class="container-page">
    <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
    <div class="p-x-2">
      <h1 class="color-red font-size-10 m-y-2">¥ {{ oProduct?.currentPrice }}</h1>
      <h3>{{ oProduct?.name }}</h3>
    </div>
    <module-card title="商品参数">
      <div class="flex justify-between">
        <p class="color-neutral font-size-4">规格</p>
        <p class="font-size-4">{{ oProduct?.specification }}</p>
      </div>
      <van-divider />
      <div class="flex justify-between">
        <p class="color-neutral font-size-5">运费</p>
        <div v-if="oProduct?.freight === 0"><p class="font-size-4">免运费</p></div>
        <div v-else><p class="font-size-4">{{ oProduct?.freight }}</p></div>
      </div>
    </module-card>
    
    <module-card title="商品详情">
      <van-image v-for="index in 4" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
    </module-card>
    <div>

    </div>

  </div>

  <!-- footbar -->
  <van-action-bar>
    <van-action-bar-icon icon="share-o" text="分享" @click="onClickShare"/>
    <van-action-bar-icon icon="shop-o" text="首页" url="/"/>
    <van-action-bar-button type="danger" text="立即购买 进入队伍" @click="onCliCKBuy"/>
  </van-action-bar>
</template>

<style scoped>
</style>
