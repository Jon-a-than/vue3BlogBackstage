<script lang="ts" setup>
import { router } from '@/router'
import { ApiGet } from '@/utils/request'
import { ElMessage, ElLoading } from 'element-plus'
import { onMounted } from 'vue';

onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '正在人海中搜寻...',
    background: '#fff',
  })
  const params = new URLSearchParams(location.search)
  const code = params.get('code')
  const res = (await ApiGet('/login/token', { code })).data
  console.log(res)

  if (res.statusCode === 2000) {
    ElMessage.success('欢迎回家φ(゜▽゜*)♪')
    loading.close()
    router.push({ path: '/home' })
  }
  else {
    setTimeout(() => {
      ElMessage.error('授权失败ψ(｀∇´)ψ')
      loading.close()
      router.push({ path: '/login' })
    }, 2000)
  }
})


</script>