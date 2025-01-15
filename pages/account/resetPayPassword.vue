<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";

definePageMeta({
  layout: 'login'  // 使用指定的布局
})

const titleStore = useTitleStore();
// 设置页面标题
titleStore.setTitle('修改支付密码');


interface Form {
  code: string,
  password: string,
}

const form = ref<Form>({
  code: '',
  password: '',
});
const isDisabled = ref(false);
const loadingText = ref('发送验证码');

const onSubmit = (values: Form) => {

  console.log('submit', values);
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
</script>

<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="form.code"
          name="code"
          label="验证码"
          placeholder="验证码"
          :rules="[{ required: true, message: '请输入手机号' }]"
      >
        <template #button>
          <van-button :disabled="isDisabled" @click="sendCode"
                      size="small" type="primary">{{ loadingText }}
          </van-button>
        </template>
      </van-field>
      <van-field
          v-model="form.password"
          type="password"
          name="password"
          label="支付密码"
          placeholder="支付密码"
          :rules="[{ required: true, message: '请输入支付密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="danger" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<style scoped>

</style>