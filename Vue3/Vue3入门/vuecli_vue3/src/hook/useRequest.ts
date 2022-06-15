//发送axios请求
import { ref } from "vue"
import axios from 'axios'
export default function (url: string) {
  //加载状态
  const loading = ref(true)
  //请求成功的数据
  let data = ref(null)
  //错误的消息
  const err = ref('')
  //发送请求
  let ax = axios.create()
  ax.get(url).then((val) => {
    data.value = val.data
    loading.value = false
  }, (e) => {
    err.value = e
    loading.value = false
  })
  return {
    loading,
    data,
    err,
  }
}