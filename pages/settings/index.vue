<script setup lang="ts">
import ModuleCard from "~/component/moduleCard.vue";
import AmountCard from "~/component/amountCard.vue";
import {showConfirmDialog} from "vant";

const router = useRouter()
const myApp = [
  //   todo 缺失页面
  {img: 'https://app.yammevli.cn/static/icons/room.png', text: '我的队伍', url: '/'},
  {img: 'https://app.yammevli.cn/static/icons/my1.png', text: '我的团队', url: '/'},
  {img: 'https://app.yammevli.cn/static/icons/my2.png', text: '邀请海报', url: '/'},
  {img: 'https://app.yammevli.cn/static/icons/my4.png', text: '公告', url: '/notice'},
  {img: 'https://app.yammevli.cn/static/icons/my5.png', text: '收货地址', url: '/settings/address'},
  {img: 'https://app.yammevli.cn/static/icons/my6.png', text: '更改手机号', url: '/account/changePhone'},
  {img: 'https://app.yammevli.cn/static/icons/my7.png', text: '联系客服', url: '/contact'},
  {img: 'https://app.yammevli.cn/static/icons/pwd.png', text: '重置支付密码', url: '/account/resetPayPassword'},
]

const myOrder = [
  {
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAn1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdAAI9AAQAAAAAAAAAAAAAAAAAAABLAAWiAAxnAAg6AATXAA/YABDYAAzWABHaABLYAA/XAA/XAA/XABDYAA/YAA/XAA/YABDXABDZABDZAA//AADYABDYAA/YAA/YABHUABXbAA4AAAAAAAAAAACXA3NbAAAANXRSTlMAGkAgx/37+v8WQ/5Fb05gZ3DIGXOLZYv/l3VA/xRYHHDDo8/zUCDH65tEBL/jkDwYJHAcGKEAeB8AAAFOSURBVHgB7dZFYiMxEIXhspq5zczMeP+rzSRmlEnq0Pt2wn9bBAAAAN9SjEkQo3sUVdMN4XRNVYhPNSVRiSumyQprFvHYjqywYxOPa0rjfuuw5wrkPRF2SSAXYYQRRvgVCCOMsMcY84PrwvgVYXCdzxjzngg7hqGZQmiG4XzrmUvmePs9B3pKyAoniE9JaI74qqMlknSPZbuumzLX0pkz2dxavnAkn1vLZs6kzbWU67q2RQ9i5hqjM8XSWpG/x/8DYYQRRhjhPxAuVyrl6MPVWr30oV6rRhpuNEt7zUaE4XMI/6JwtbTXarTbjVZpryM1TN3SWq8/GNKH4aDfK62NSG6481EeT6Z0ZDoZl0rdqszw2qxDF+ZzIslhPoQRRhhhhJ+HMMIII7xgb1i8HhYCYb6luPCKnqKK6qr0HEVQWV3Rs1ZMgBV9FQAAAAD4D/pfkeJHiZyYAAAAAElFTkSuQmCC',
    text: '待发货'
  },
  {
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAqFBMVEVHcEwAAADXAA9eXl4zMzNWVlYeHh4LCwsAAAAjIyMhISEcHBwUFBQ1NTUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYABAAAAAAAAAAAAAAAAAAAAAAAADaABLXAA/UABXYAA8AAABjY2OTk5Pt7e0SEhL///8DAwPYABAeHh4UFBT7qNJ8AAAALnRSTlMAQEA2fS/C/MfZi6P6mBwgGHAQ4++/CHQwRFwEWNOPq/uojMcUw4jP98scIBhwuejYXgAAAd9JREFUeNrt2ldvwkAMwHEfM11JKLOLDrqHw2r7/b9ZUQ5hFWTR8yUXVfLvgYfIyl9ExMkDoJRSSql/KDZCMfhIIhSLEpCL0EMEYjF6SUHKoBejYddwxzjqeIeFJzAa1rCGqwrfSxaBfzh9QEa54cEVVhMeYzXhM6wmfNqtKHyN1YTP0XoMfDslPcz1HU5Q+8zVfMIXfcz14sDhIVqXEDY8usHcLYQM08rqngYOj5HGwoVpZd1ByDCtrKdByDCtrOcRhAzTyhpC2DCtLGn4o7bhEKaVJQlvcwjTygobppUVOPxCK8vdqzyc0MqSmIjDhlaWxNvEM2xA6r32izDsT8Ma1rCGNazhUsL1w4Pj5fL44LAOPG5eHm62cKPVBA4zLw832oik3QAGNy8Nn+CWE2Bw87JwA3c0gMHNS8LNNu5oN4HBzQvCLbTm2XSazdFqAYObdw/X0cpmi5VZhlYdGNy8S7hjVo4wly3WMswdGUL2znf2hcmXvW6zxdpsToeJw/xfw9/0BayMDpP9887hZf45XWxM6TBxmufDcdnhFBhRuZc6Ak4SlfnjilLgpcYq9HayKMsqdIG4KHJlOinyISFQyGNRoJAXARn/Vx8p/5c9Ofnrrf4BTSmllFJKqdL9AHl35UDEgdmsAAAAAElFTkSuQmCC',
    text: '待收货'
  },
  {
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAjVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAADUABXYABPYABDZABDYABDbAA7YABDXAA/aABIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuSxsVAAAAL3RSTlMAHEAgx/8YcBgo54//JMcgHNtsCOd0ECTvgNP3j88oy/ufUK8ww7u3oGAEkBRoXAlOgxEAAAHVSURBVHgB7NfFkUMBEAPRz4z5J7vHqSVrytVmdQB6ZxXuSXPOOefKCqxMs3XTojV1EqbckHNu2eJ1Kbji4crwJbivgPor4KoAii3Dhg0bNmx4eBA8TjMK591lmVE474aMw8INGYeFu0wDD6fcseDhvIvCQ95F4TlGtQvCc8xqF4TnGNYuCM8xrV0QHmJcuwQs5oVLwN8B7WLwd0K4ACxk4ULwd0a7HPwd0i4Hf6e0i8HfMO1y8DdZuygcsnZZOGTtonDI2kXhkLWLwiFrF4VD1i4PF+u2LNv+kLd4DP7HHwMbNmzYsOHzqz27Ro8YhqIofAee0g4zo3n/y0vnp5Dodvn012Y4Bs3mIM1n06RBzcVyBcJquYgb1FxLb7M1SGS2G+mtEWQnan8YIMHgsBd1RJjTWSyX6xqR1teLWM4nhLqNxXZ/IMLjLrbnDTGGL7G9hokzvnXGxA0f3+IP1SXqUKl1cRHLsazgVJVHsVyKNVINar04HU3RWqh9bcDQ29HRFK2FBqAB68cijX/zPlZQfHK1Ka5ayLRlIu++bK7rP2tx7Cqw3E2hasE1hagF2RSiFlRTiFowTSFqwTSFqAXXFKIWbFOIWrBNIWrBWa/xn2RZlmXZJ2O4ShcaEVTeAAAAAElFTkSuQmCC',
    text: '已完成'
  },
]

const onClickTransfer = () => {
  alertSetting();
}
const onClickWithdraw = () => {
  alertSetting();
}

const alertSetting = () => {
  showConfirmDialog({
    message:
        '请先设置支付密码',
  }).then((res) => {
    router.push("/account/resetPayPassword")
  })
}
</script>

<template>
  <div class="p-3">
    <div class="m-b-5 flex justify-between items-center">
      <div class="m-e-3">
        <van-image width="80px" round height="80px" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
      </div>
      <div class="flex-auto font-size-3">
        <p class="m-0">ybkim</p>
        <div class="color-coolgray m-y-1">176****9022</div>
        <div class="color-red">邀请码：下单后可获得</div>
      </div>
      <div>
        <van-button url="/account/changeAccount" text="切换账号" size="small"/>
      </div>
    </div>

    <amount-card>
      <van-space>
        <van-button url="/settings/earnings" color="white" style="background: none" round plain hairline text="明细"
                    size="small"/>
        <van-button @click="onClickTransfer" color="white" style="background: none" round plain hairline text="转账"
                    size="small"/>
        <van-button @click="onClickWithdraw" color="white" style="background: none" round plain hairline
                    text="提现"
                    size="small"/>
      </van-space>
    </amount-card>

    <module-card title="我的订单">
      <van-row>
        <van-col v-for="(item, index) in myOrder" :key="index" span="8" class="text-align-center m-y-5">
          <nuxt-link to="/myOrder">
            <van-image width="30px" :src="item.img"></van-image>
            <p class="m-t-3">{{ item.text }}</p>
          </nuxt-link>
        </van-col>
      </van-row>
    </module-card>

    <module-card title="我的应用">
      <van-row>
        <van-col v-for="(item, index) in myApp" :key="index" span="6" class="text-align-center m-y-5">
          <nuxt-link :to="item.url">
            <van-image width="30px" :src="item.img"></van-image>
            <p class="m-t-3 font-size-3">{{ item.text }}</p>
          </nuxt-link>
        </van-col>
      </van-row>
    </module-card>

  </div>

</template>

<style scoped>

</style>