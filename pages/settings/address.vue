<script setup lang="ts">
import {useTitleStore} from "~/store/useDetailLayouts";
import ModuleCard from "~/component/moduleCard.vue";

definePageMeta({
  layout: 'product-detail'  // 使用指定的布局
})

const titleStore = useTitleStore()
// 设置页面标题
titleStore.setTitle('收货地址');
const router = useRouter();

const jumpEditAddress = (id: number) => {
  router.push('/settings/addAddress?id=' + id);
}
</script>

<template>
  <div class="container-page">
    <module-card v-for="item in 10">
      <van-row>
        <van-col span="20">
          <p class="font-size-4">收件人: 进大帅</p>
          <p class="m-y-5">
            地区:北京/222/22
          </p>
          <p>
            <van-text-ellipsis content="地址: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                               expand-text="展开"
                               collapse-text="收起"/>
          </p>
        </van-col>
        <van-col span="4" class="m-auto text-right">
          <van-icon @click="jumpEditAddress(1)" size="24" class="color-red" name="more-o"/>
        </van-col>
      </van-row>
    </module-card>

  </div>


  <van-action-bar>
    <van-action-bar-button url="/settings/addAddress" type="danger" text="添加新地址"/>
  </van-action-bar>
</template>

<style scoped>

</style>
