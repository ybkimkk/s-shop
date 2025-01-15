// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,  // 确保 SSR 开启
  pages:true,
  typescript: {
    strict: true // 确保严格模式开启
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css:[
    '~/assets/css/index.css',
 // 引入 video.js 的默认样式

  ],
  modules:[
    '@unocss/nuxt',
    '@pinia/nuxt'
  ],
  plugins: [
    // 加载 Vant 插件
    '~/plugins/vant.ts',
  ],
})
