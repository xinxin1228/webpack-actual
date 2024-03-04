import { ref } from 'vue'
import { defineStore } from 'pinia'

const useUserInfoStore = defineStore('userInfo', () => {
  const userInfo = ref({
    name: 'web',
    age: 24
  })

  const updateInfo = ({ name, age }) => {
    userInfo.value = {
      name: name || userInfo.value.name,
      age: age || userInfo.value.age
    }
  }

  return { userInfo, updateInfo }
})

export default useUserInfoStore
