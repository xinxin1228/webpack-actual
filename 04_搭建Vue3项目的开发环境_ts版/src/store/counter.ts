import { ref } from 'vue'
import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', () => {
  const counter = ref<number>(0)

  const increment = () => {
    counter.value++
  }

  const decrement = () => {
    counter.value--
  }

  return {
    counter,
    increment,
    decrement
  }
})

export default useCounterStore
