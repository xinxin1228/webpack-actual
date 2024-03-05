<template>
  <h2 class="sass">测试{{ type }}文件是否<span>正常加载</span></h2>
  <h2>counter: {{ counter }}</h2>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/store'

interface PropsTypes {
  type: string
}

defineProps<PropsTypes>()

const counterStore = useCounterStore()
const { counter } = storeToRefs(counterStore)
</script>

<style scoped lang="scss">
.sass {
  color: red;
  font-size: 20px;
  span {
    color: blue;
  }
}
</style>
