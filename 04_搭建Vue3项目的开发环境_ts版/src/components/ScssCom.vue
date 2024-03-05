<template>
  <h2 class="scss">测试{{ type }}文件是否<span>正常加载</span></h2>
  <h3>name: {{ userInfo.name }} age: {{ userInfo.age }}</h3>
  <button @click="updateInfo({ name: 'vue' })">更改姓名</button>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserInfoStore } from '@/store'

interface PropsTypes {
  type: string
}

defineProps<PropsTypes>()

const userInfoStore = useUserInfoStore()
const { userInfo } = storeToRefs(userInfoStore)
const { updateInfo } = userInfoStore
</script>

<style scoped lang="scss">
.scss {
  color: red;
  span {
    font-size: 30px;
    color: blue;
  }
}
</style>
