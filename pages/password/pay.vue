<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";

definePageMeta({
  layout: 'detail'  // 使用指定的布局
})

const titleStore = useTitleStore();
// 设置页面标题
titleStore.setTitle('修改支付密码');


interface PayPasswordForm {
  code: string,
  password: string,
}

const payPasswordForm = ref<PayPasswordForm>({
  code: '',
  password: '',
});
const isDisabled = ref(false);
const loadingText = ref('发送验证码');

const onSubmit = (values: PayPasswordForm) => {

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
          v-model="payPasswordForm.code"
          name="验证码"
          label="验证码"
          placeholder="验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
      >
        <template #button>
          <van-button :disabled="isDisabled"  @click="sendCode"
                      size="small" type="primary">{{ loadingText }}
          </van-button>
        </template>
      </van-field>
      <van-field
          v-model="payPasswordForm.password"
          type="password"
          name="支付密码"
          label="支付密码"
          placeholder="支付密码"
          :rules="[{ required: true, message: '请填写支付密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<style scoped>

</style>