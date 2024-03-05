import { ref } from 'vue'
import { defineStore } from 'pinia'

const useUserInfoStore = defineStore('userInfo', () => {
  const userInfo = ref({
    name: 'web',
    age: 24
  })

  type funType = ({ name, age }: { name?: string; age?: number }) => void

  const updateInfo: funType = ({ name, age }) => {
    userInfo.value = {
      name: name || userInfo.value.name,
      age: age || userInfo.value.age
    }
  }

  return { userInfo, updateInfo }
})

export default useUserInfoStore
