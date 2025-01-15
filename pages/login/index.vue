<script setup lang="ts">


import {useTitleStore} from "~/store/useDetailLayouts";
import LoginTitle from "~/component/loginTitle.vue";
import {showToast} from "vant";

definePageMeta({
  layout: 'login'  // 使用指定的布局
})
const titleStore = useTitleStore();
const router = useRouter();
// 设置页面标题
titleStore.setTitle('登录');

interface Form {
  phone: string,
  password: string,
  code: string,
  type: number
}

const form = ref<Form>({
  phone: '',
  password: '',
  code: '',
  type: 1,
});
const isDisabled = ref(false);
const loadingText = ref('发送验证码');
const checked = ref(false);

const onSubmit = (values: Form) => {
  if (!checked.value) {
    showToast('请阅读并同意协议');
    return;
  }
  router.push('/');
};

const sendCode = () => {
  isDisabled.value = true;
  let countdown = 60;
  loadingText.value = `${countdown}秒后重试`;
  setInterval(() => {
    countdown--;
    loadingText.value = `${countdown}秒后重试`;

    if (countdown < 0) {
      isDisabled.value = false; // 启用按钮
      loadingText.value = '发送验证码'; // 重置文本
    }
  }, 1000); // 60秒后重新启用按钮
}

const changeFrom = (type: number) => {
  console.log(type);
  form.value.type = type;
}
</script>

<template>
  <login-title title="登录亿本堂"></login-title>
  <van-form @submit="onSubmit">
    <div v-if="form.type===1">
      <van-cell-group inset>
        <van-field
            v-model="form.phone"
            name="phone"
            label="+86"
            placeholder="请输入手机号"
            :rules="[{ required: true, message: '请输入手机号' }]"
        >
        </van-field>
        <van-field
            v-model="form.password"
            type="password"
            name="password"
            label="密码"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请输入密码' }]"
        />
      </van-cell-group>
    </div>
    <div v-if="form.type===2">
      <van-cell-group inset>
        <van-field
            v-model="form.phone"
            name="phone"
            label="+86"
            placeholder="请输入手机号"
            :rules="[{ required: true, message: '请输入手机号' }]"
        >
        </van-field>
        <van-field
            v-model="form.code"
            name="code"
            label="验证码"
            placeholder="请输入验证码"
            :rules="[{ required: true, message: '请输入验证码' }]"
        >
          <template #button>
            <van-button :disabled="isDisabled" @click="sendCode"
                        size="small" type="primary">{{ loadingText }}
            </van-button>
          </template>
        </van-field>
      </van-cell-group>
    </div>
    <div class="flex justify-between m-16">
      <p @click="changeFrom(form.type===2?1:2)" class="color-purple">
        <van-icon name="exchange"/>
        {{ form.type === 1 ? '切换至短信登录' : '切换至密码登录'}}
      </p>
      <nuxt-link to="/account/resetPassword"><p class="color-depp-gray">忘记密码?</p></nuxt-link>
    </div>
    <div class="m-16 m-t-10">
      <van-button round block type="danger" native-type="submit">
        登录
      </van-button>
    </div>
    <div class="m-16">
      <van-button url="/register" color="#090909" round block plain type="primary" native-type="submit">
        注册新账号
      </van-button>
    </div>
  </van-form>
  <div class="m-t-10">
    <van-checkbox v-model="checked">我已阅读并同意以下协议</van-checkbox>
    <nuxt-link class="block m-y-5" to="/agreement/1"><p class="color-red">《用户服务协议及权益保障告知书》</p></nuxt-link>
    <nuxt-link to="/agreement/2"><p class="color-red">《隐私政策》</p></nuxt-link>
  </div>
</template>

<style scoped>
.m-16 {
  margin: 16px
}
</style>