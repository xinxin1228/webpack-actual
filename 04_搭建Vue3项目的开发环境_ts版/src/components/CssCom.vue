<template>
  <h2 class="css">测试{{ type }}文件是否<span>正常加载</span></h2>
  <button @click="increment">count++</button>
  <button @click="decrement">count--</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store'

interface PropsTypes {
  type: string
}

defineProps<PropsTypes>()

const counterStore = useCounterStore()
const { increment, decrement } = counterStore
</script>

<style scoped>
.css {
  color: red;
  span {
    font-size: 30px;
    color: blue;
  }
}
</style>
