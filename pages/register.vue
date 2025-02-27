<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";
import LoginTitle from "~/component/loginTitle.vue";
import {showDialog, showToast} from "vant";

import type { UserRegister, UserRegisterAPI } from "~/types/user";

definePageMeta({
  layout: 'login'  // 使用指定的布局
})
const titleStore = useTitleStore();
const router = useRouter();
// 设置页面标题
titleStore.setTitle('注册');

const oRegister = ref<UserRegister>({
  name: '',
  phone: '',
  email: '',
  password: '',
  code: '',
  invitationCode: '',
});
const isDisabled = ref(false);
const loadingText = ref('发送验证码');
const checked = ref(false);

const onSubmit = async (values: UserRegister) => {
  if (!checked.value) {
    showToast('请阅读并同意协议');
    return;
  }

  let reqRegister
  try {
    reqRegister = <UserRegisterAPI> await useNuxtApp().$axios.post('/user/register', values);
  } catch (error) {
    console.log(error)
    return
  }

  if (reqRegister?.data.code === 201) {
    showDialog({ message: '用户已注册' })
    return
  }
    
  showToast('注册成功')
  router.push('/login');
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

  await useNuxtApp().$axios.post('/email/send',{email:oRegister.value.email})
}

</script>

<template>
  <login-title title="注册亿本堂"></login-title>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="oRegister.name"
          name="name"
          label="昵称"
          placeholder="请输入昵称"
          :rules="[{ required: true, message: '请输入昵称' }]"
      />
      <van-field
          v-model="oRegister.phone"
          name="phone"
          label="+86"
          placeholder="请输入手机号"
      />
      <!-- :rules="[{ required: true, message: '请输入手机号' }]" -->
      <van-field
          v-model="oRegister.email"
          name="email"
          label="邮箱"
          placeholder="请输入邮箱"
          :rules="[{ required: true, message: '请输入邮箱' }]"
      />
      <van-field
          v-model="oRegister.code"
          name="code"
          label="邮箱验证码"
          placeholder="请输入邮箱验证码"
      >
      <!-- :rules="[{ required: true, message: '请输入验证码' }]" -->
        <template #button>
          <van-button :disabled="isDisabled" @click="sendCode"
                      size="small" type="primary">{{ loadingText }}
          </van-button>
        </template>
      </van-field>
      <van-field
          v-model="oRegister.password"
          type="password"
          name="password"
          label="密码"
          placeholder="至少8位，包含数字和字母"
          :rules="[{ required: true, message: '请输入密码' }]"
      />
      <van-field
          v-model="oRegister.invitationCode"
          name="invitationCode"
          label="邀请码"
          placeholder="请输入邀请码"
      />
      <!-- :rules="[{ required: true, message: '请输入邀请码' }]" -->
    </van-cell-group>

    <div class="m-16 m-t-10">
      <van-button round block type="danger" native-type="submit">
        注册
      </van-button>
    </div>
    <div class="m-16">
      <van-button url="/login" color="#090909" round block plain type="primary" native-type="submit">
        已有账号登录
      </van-button>
    </div>
  </van-form>
  <div class="m-t-10">
    <van-checkbox v-model="checked">我已阅读并同意以下协议</van-checkbox>
    <nuxt-link class="block m-y-5" to="/agreement/1"><p class="color-red">《用户服务协议及权益保障告知书》</p></nuxt-link>
    <nuxt-link to="/agreement/2"><p class="color-red">《隐私政策》</p></nuxt-link>
  </div>
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