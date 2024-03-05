<template>
  <h1>这是 Home 页面</h1>
  <create-image name="01.jpg" :url="imgUrl"></create-image>
</template>

<script setup lang="ts">
import imgUrl from '@/img/01.jpg'
import CreateImage from '@/components/CreateImage.vue'
</script>

<style scoped lang="less"></style>
