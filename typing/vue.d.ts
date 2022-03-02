import vue from 'vue'
import { $post, $get } from '@/plugins/request'

// 声明 vue 全局变量 ts 类型
declare module 'vue/types/vue' {
  interface Vue {
    $post<T>(url: string, args: object): Promise<T | null>
    $get<T>(url: string, args: object): Promise<T | null>
  }
}
