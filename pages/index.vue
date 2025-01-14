<script setup lang="ts">
import homeImage1 from '@/assets/img/home1.png';
import homeImage2 from '@/assets/img/home2.png';
import banner from '@/assets/img/banner.png';
import {showDialog} from "vant";

const router = useRouter()
const showHome1 = () => {
  showDialog({message: '下单后可获得邀请功能'});
}
const goTo = () => {
  router.push('/video');
}
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
  <van-row class="m-y-3">
    <van-col span="12" class="p-1" @click="showHome1">
      <van-image :src="homeImage1"/>
    </van-col>
    <van-col span="12" class="p-1" @click="goTo">
      <van-image :src="homeImage2"/>
    </van-col>
  </van-row>

  <van-row>
    <van-col span="12" class="p-1">
      <div class="product-card">
        <nuxt-link to="/product">
          <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
          <div class="p-2">
            <h5 class="m-b-1">
              桦褐孔菌复合固体饮料
            </h5>
            <div class="flex justify-between items-center">
              <p><span style="color: #FF4037">¥</span>600</p>
              <van-button round type="danger" size="small" text="购买"/>
            </div>
          </div>
        </nuxt-link>
      </div>
    </van-col>
    <van-col span="12" class="p-1">
      <div class="product-card">
        <nuxt-link to="/product">
          <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
          <div class="p-2">
            <h5 class="m-b-1">
              桦褐孔菌复合固体饮料
            </h5>
            <div class="flex justify-between items-center">
              <p><span style="color: #FF4037">¥</span>600</p>
              <van-button round type="danger" size="small" text="购买"/>
            </div>
          </div>
        </nuxt-link>
      </div>
    </van-col>
  </van-row>

</template>

<style scoped>
.notice-swipe {
  height: 40px;
  line-height: 40px;
}


</style>