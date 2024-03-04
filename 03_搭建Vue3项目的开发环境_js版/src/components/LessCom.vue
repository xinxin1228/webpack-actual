<template>
  <h2 class="less">测试{{ type }}文件是否<span>正常加载</span></h2>
  <h3>name: {{ userInfo.name }} age: {{ userInfo.age }}</h3>
  <button @click="changeInfo">age++</button>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserInfoStore } from '@/store'

defineProps({
  type: String
})

const userInfoStore = useUserInfoStore()
const { userInfo } = storeToRefs(userInfoStore)

const changeInfo = () => {
  userInfo.value.age++
}
</script>

<style scoped lang="less">
.less {
  color: blue;
  span {
    color: red;
  }
}
</style>
