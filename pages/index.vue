<script setup lang="ts">
import homeImage1 from '@/assets/img/home1.png';
import homeImage2 from '@/assets/img/home2.png';
import banner from '@/assets/img/banner.png';
import {showDialog} from "vant";
import { useAuthStore } from '~/store/auth';
import type {Product, ProductListAPI} from '~/types/product';
import type { CheckInvitedAPI } from '~/types/invite';

const router = useRouter()
const oAuth = useAuthStore()
const showHome1 = async () => {

  let reqCheckInvited = <CheckInvitedAPI> await useNuxtApp().$axios.get('/user/verifyToken',{
    headers:{
      token: oAuth.token
    }
  })

  if (!reqCheckInvited.data.data.invitationCode){
    showDialog({message: '下单后可获得邀请功能'});
    return
  }

  router.push('/account/invite');
}
const goTo = () => {
  router.push('/video');
}

const aProducts = ref<Product[]>()


onMounted(async () => {

  //商品列表
  try {
    let reqProductList = <ProductListAPI>await useNuxtApp().$axios.get('/product/list')
    if (reqProductList.data.code === 0) aProducts.value = reqProductList.data.data
  } catch (error) {
    router.push('/')
  }

})

</script>

<template>
  <van-notice-bar left-icon="volume-o" :scrollable="false">
    <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="3000"
        :touchable="false"
        :show-indicators="false"
    >
      <van-swipe-item>aaaa获得推荐奖励300元</van-swipe-item>
      <van-swipe-item>bbbb获得推荐奖励300元</van-swipe-item>
      <van-swipe-item>cccc获得推荐奖励300元</van-swipe-item>
    </van-swipe>
  </van-notice-bar>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item class="banner-item">
      <div class="banner-item-div">
        <van-image width="100%" fit="scale-down" :src="banner"/>
      </div>
    </van-swipe-item>

  </van-swipe>

  <div class="container-page">
    <van-row class="m-y-3">
      <!--邀请朋友 -->
      <van-col span="12" class="p-1" @click="showHome1">
        <van-image :src="homeImage1"/>
      </van-col>
      <!-- 玩法介绍 -->
      <van-col span="12" class="p-1" @click="goTo">
        <van-image :src="homeImage2"/>
      </van-col>
    </van-row>

    <!-- 商品列表 -->
    <van-row>
      <template v-for="item in aProducts">
        <van-col span="12" class="p-1">
          <div class="product-card">
            <nuxt-link :to="`/product/${item.id}`">
              <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
              <div class="p-2">
                <h5 class="m-b-1">
                  {{ item.name }}
                </h5>
                <div class="flex justify-between items-center">
                  <p><span style="color: #FF4037">¥ </span>{{ item.currentPrice }}</p>
                  <van-button round type="danger" size="small" text="购买"/>
                </div>
              </div>
            </nuxt-link>
          </div>
        </van-col>
      </template>
    </van-row>

  </div>

</template>

<style scoped>
.notice-swipe {
  height: 40px;
  line-height: 40px;
}


</style>