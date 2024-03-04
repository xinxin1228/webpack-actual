<template>
  <div class="vue">
    <h1>Hello Vue</h1>
    <div class="count">
      <button @click="count++">+1</button>
      <h2>{{ count }}</h2>
      <button @click="count--">-1</button>
    </div>
    <CssCom type="css" />
    <LessCom type="less" />
    <SassCom type="sass" />
    <ScssCom type="scss" />
    <Layout />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CssCom, LessCom, SassCom, ScssCom, Layout } from '@/components'

const count = ref(10)
</script>

<style scoped lang="less">
.vue {
  .count {
    height: 30px;
    display: flex;
    align-items: center;
    h2 {
      margin: 0 10px;
    }
  }
}
</style>
