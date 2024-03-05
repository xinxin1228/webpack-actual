<template>
  <h1>这是 About 页面</h1>
  <create-image name="02.jpg" :url="imgUrl"></create-image>
</template>

<script setup lang="ts">
import imgUrl from '@/img/02.jpg'
import CreateImage from '@/components/CreateImage.vue'
</script>

<style scoped lang="less"></style>
