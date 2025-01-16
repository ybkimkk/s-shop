<script setup lang="ts">


import {useTitleStore} from "~/store/useDetailLayouts";
import LoginTitle from "~/component/loginTitle.vue";

definePageMeta({
  layout: 'login'  // 使用指定的布局
})
const titleStore = useTitleStore();
// 设置页面标题
titleStore.setTitle('更改手机号');

interface Form {
  phone: string,
  code: string,
}

const form = ref<Form>({
  phone: '',
  code: '',
});
const resourceIsDisabled = ref(false);
const targetIsDisabled = ref(false);
const resourceLoadingText = ref('发送验证码');
const targetLoadingText = ref('发送验证码');

const onSubmit = (values: Form) => {

  console.log('submit', values);
};
const sendCode = async (type: number) => {
  let res = await useGlobalMethods().captcha();
  if (!res) {
    return;
  }
  let isDisabled = type === 1 ? resourceIsDisabled : targetIsDisabled;
  let loadingText = type === 1 ? resourceLoadingText : targetLoadingText;
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
  }, 1000);


}
</script>

<template>

  <van-form @submit="onSubmit">
    <login-title title="验证原手机号"></login-title>
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
          <van-button :disabled="resourceIsDisabled" @click="sendCode(1)"
                      size="small" type="primary">{{ resourceLoadingText }}
          </van-button>
        </template>
      </van-field>
    </van-cell-group>
    <login-title class="m-t-10" title="验证新手机号" :home-link="false"></login-title>
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
          <van-button :disabled="targetIsDisabled" @click="sendCode(2)"
                      size="small" type="primary">{{ targetLoadingText }}
          </van-button>
        </template>
      </van-field>
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

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  background-color: #fff;
}
</style>