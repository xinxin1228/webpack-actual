<template>
  <div class="create-img">
    插入的图片名称：{{ name }}
    <br />
    <img :src="url" :alt="name" />
  </div>
</template>

<script lang="ts" setup>
interface PropsTypes {
  name: string
  url: string
}
defineProps<PropsTypes>()
</script>

<style scoped lang="less">
.create-img {
  img {
    width: 200px;
    height: 200px;
  }
}
</style>
