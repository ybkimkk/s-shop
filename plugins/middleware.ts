export default defineNuxtPlugin(() => {
    addRouteMiddleware((to, from) => {

        //1. 没有token 跳转 首页
        //2
   console.log(to);
   console.log(from);
    })
  })
  