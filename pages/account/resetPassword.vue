<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";
import LoginTitle from "~/component/loginTitle.vue";
import { showToast } from "vant";

import type { UserLogin, UserLoginAPI } from "~/types/user";

definePageMeta({
  layout: 'login'  // 使用指定的布局
})
const titleStore = useTitleStore();
// 设置页面标题
titleStore.setTitle('重置密码');

const oPasswordForgot = ref<UserLogin>({
  email: '',
  code: '',
  password: '',
});
const isDisabled = ref(false);
const loadingText = ref('发送验证码');

const onSubmit = async (values: UserLogin) => {

  let reqPasswordForgot
  try {
    reqPasswordForgot = <UserLoginAPI> await useNuxtApp().$axios.post('/user/forgot', values)
  } catch(error){
    console.log(error);
    return;
  }

  showToast('修改成功')
  navigateTo('/login')
};

const sendCode = async () => {
  let res = await useGlobalMethods().captcha();
  if (!res) {
    return;
  }
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

  await useNuxtApp().$axios.post('/email/send',oPasswordForgot.value.email)
}
</script>

<template>
  <login-title title="重置密码"></login-title>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="oPasswordForgot.email"
          name="email"
          label="邮箱"
          placeholder="请输入邮箱"
          :rules="[{ required: true, message: '请输入邮箱' }]"
      >
      </van-field>
      <van-field
          v-model="oPasswordForgot.code"
          name="code"
          label="验证码"
          placeholder="请输入验证码"
          :rules="[{ required: true, message: '请输入验证码' }]"
      >
        `
        <template #button>
          <van-button :disabled="isDisabled" @click="sendCode"
                      size="small" type="primary">{{ loadingText }}
          </van-button>
        </template>
        `
      </van-field>
      <van-field
          v-model="oPasswordForgot.password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入新密码,至少8位"
          :rules="[{ required: true, message: '请输入新密码,至少8位' }]"
      />
    </van-cell-group>

    <div class="m-16 m-t-10">
      <van-button round block type="danger" native-type="submit">
        确认
      </van-button>
    </div>
  </van-form>
  <van-overlay>
    <div class="wrapper" @click.stop>
      <div class="block" id="captcha"></div>
    </div>
  </van-overlay>
</template>

<style scoped>
.m-16 {
  margin: 16px
}
</style>