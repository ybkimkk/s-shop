<script setup lang="ts">


import {useTitleStore} from "~/store/useDetailLayouts";
import {showToast} from "vant";

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

interface Address {
  text: string;
  value: string;
  children: Address[]
}

const form = ref<Form>({
  name: '',
  phone: '',
  area: '',
  address: '',
});
const isDisabled = ref(false);
const loadingText = ref('发送验证码');
const area = ref<Address[]>([]);
const showPicker = ref(false);
const onSubmit = (values: Form) => {
  console.log('submit', values);
};
onMounted(async () => {
  let areaData = await fetch("/data/area.json");
  area.value = await areaData.json()
})

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

const pickerConfirm = ({selectedValues, selectedOptions, selectedIndexes}: {
  selectedValues: any,
  selectedOptions: Address[],
  selectedIndexes: any
}) => {
  form.value.area = selectedOptions.map((item: Address) => {
    return item.text
  }).join('/');
  showPicker.value = false;

}
const pickerCancel = (selectedValues: any) => {
  showToast(`当前值: ${selectedValues.join(',')}`);
}
const al = () => {
  console.log(showPicker)
  showPicker.value = true
}
</script>

<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="form.name"
          name="name"
          label="姓名"
          placeholder="请输入姓名"
          :rules="[{ required: true, message: '请输入姓名' }]"
      >
      </van-field>
      <van-field
          v-model="form.phone"
          name="phone"
          label="+86"
          placeholder="请输入电话"
          :rules="[{ required: true, message: '请输入电话' }]"
      />
      <van-field
          @click="showPicker = true"
          v-model="form.area"
          name="area"
          label="地区"
          right-icon="arrow"
          placeholder="选择省市区"
          readonly
          :rules="[{ required: true, message: '选择省市区' }]"
      />
      <van-field
          v-model="form.address"
          name="address"
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
    <van-popup v-model:show="showPicker" destroy-on-close round position="bottom">
      <van-picker
          title="选择省市区"
          @confirm="pickerConfirm"
          @cancel="showPicker = false"
          :columns="area"/>
    </van-popup>


  </van-form>
</template>

<style scoped>
.m-16 {
  margin: 16px
}
</style>