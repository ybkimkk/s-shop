// plugins/axios.ts
import axios from 'axios'
import {defineNuxtPlugin} from '#app'
import {useAuthStore} from '@/store/auth'
import {showDialog} from "vant";

export default defineNuxtPlugin(nuxtApp => {
    //token 存储地方
    const authStore = useAuthStore()
    const config = useRuntimeConfig();
    const axiosInstance = axios.create({
        baseURL: config.public.apiBaseUrl as string,
    })

    // 请求拦截器
    axiosInstance.interceptors.request.use(config => {
        if (authStore.token) {
            config.headers['token'] = `${authStore.token}`
        }
        return config
    })

    // 响应拦截器
    axiosInstance.interceptors.response.use(
        response => {
            if (response.data.code !== 0) {
                showDialog({ message: response.data.msg || '未知错误' });
                return Promise.reject(new Error(response.data.msg || '未知错误'));
            }
            return response
        },
        error => {
            const code = error.response ? error.response.status : null

            if (code === 401) {
                authStore.logout() // 处理未授权错误
            }
       
            return Promise.reject(error)
        }
    )

    nuxtApp.provide('axios', axiosInstance)
})
