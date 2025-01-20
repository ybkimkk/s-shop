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
// 빈이:
// qq353007811@gmail.com

// 빈이:
// 123456

interface Form {
  email: string,
  password: string,
  code: string,
  type: number
}

interface api_user_login {
  code: number,
  msg: string,
  data: string
}

//todo 换成邮箱 此正则可以在注册界面用
//电话号码正则
const phoneRegex = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
const form = ref<Form>({
  email: '',
  password: '',
  code: '',
  type: 1,
});
const isDisabled = ref(false);
const loadingText = ref('发送验证码');
const checked = ref(false);

const onSubmit = async (values: Form) => {
  if (!checked.value) {
    showToast('请阅读并同意协议');
    return;
  }
  let nEmail = values.email
  let sPassword = values.password

  const fnCheckLoginData = function (phone:string, password:string) : boolean{


    return true
  }

  if (fnCheckLoginData(nEmail,sPassword)) {

  }
  
  let res = await useFetch<api_user_login>('http://localhost:3001/api/user/login',{
    method: 'POST',
    body: {
      email: nEmail,
      password: sPassword
    }
  })

  let reqdata = res.data.value

  if (reqdata?.code == 0){
    showToast('登录成功')
    router.push('/')
  } else {
    //登陆失败
    let errormsg = reqdata?.msg || '登陆失败'
    showToast(errormsg)
  }
};

const sendCode =async () => {
  //todo 这个可考虑不用
  // let res = await useGlobalMethods().captcha();  

  // if (!res) {
  //   return;
  // }

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

  //发送验证码
  
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
            v-model="form.email"
            name="email"
            label="邮箱"
            placeholder="请输入邮箱"
            :rules="[
              { required: true, message: '请输入邮箱' },
              { pattern:phoneRegex, message: '请输入正确邮箱'}
            ]"
        >
        </van-field>
        <van-field
            v-model="form.password"
            type="password"
            name="password"
            label="密码"
            placeholder="请输入密码"
            :rules="[
              { required: true, message: '请输入密码' }
            ]"
        />
      </van-cell-group>
    </div>
    <div v-if="form.type===2">
      <van-cell-group inset>
        <van-field
            v-model="form.email"
            name="email"
            label="邮箱"
            placeholder="请输入邮箱"
            :rules="[
              { required: true, message: '请输入邮箱' },
              { pattern:phoneRegex, message: '请输入正确邮箱'}
            ]"
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
            <van-button 
              :disabled="isDisabled" 
              @click="sendCode"
              size="small" 
              type="primary">
              {{ loadingText }}
            </van-button>
          </template>
        </van-field>
      </van-cell-group>
    </div>
    <div class="flex justify-between m-16">
      <p @click="changeFrom(form.type===2?1:2)" class="color-purple">
        <van-icon name="exchange"/>
        {{ form.type === 1 ? '切换至邮箱登录' : '切换至密码登录' }}
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