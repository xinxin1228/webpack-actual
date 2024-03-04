<template>
  <h2 class="sass">测试{{ type }}文件是否<span>正常加载</span></h2>
  <h2>counter: {{ counter }}</h2>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/store'

defineProps({
  type: String
})

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
