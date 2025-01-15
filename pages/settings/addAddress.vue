<script setup lang="ts">


import {useTitleStore} from "~/store/useDetailLayouts";
import LoginTitle from "~/component/loginTitle.vue";

definePageMeta({
  layout: 'detail'  // 使用指定的布局
})
const titleStore = useTitleStore();
// 设置页面标题
titleStore.setTitle('创建收货地址');

interface Form {
  name: string;
  phone: string;
  area: string;
  address: string;
  
  

}

const form = ref<Form>({
  name: '',
  phone: '',
  area: '',
  address: '',
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
          v-model="form.name"
          name="姓名"
          label="姓名"
          placeholder="请输入姓名"
          :rules="[{ required: true, message: '请输入姓名' }]"
      >
      </van-field>
      <van-field
          v-model="form.phone"
          name="电话"
          label="+86"
          placeholder="请输入电话"
          :rules="[{ required: true, message: '请输入电话' }]"
      />
      <van-field
          v-model="form.phone"
          name="地区"
          label="地区"
          placeholder="选择省市区"
          :rules="[{ required: true, message: '请输入地区' }]"
      />
      <van-field
          v-model="form.address"
          name="地址"
          label="地址"
          placeholder="请输入地址"
          :rules="[{ required: true, message: '请输入地址' }]"
      />
    </van-cell-group>

    <div class="m-16 m-t-10">
      <van-button round block type="danger" native-type="submit">
        确认
      </van-button>
    </div>
  </van-form>
</template>

<style scoped>
.m-16 {
  margin: 16px
}
</style>