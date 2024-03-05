<template>
  <div class="layout">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/article">Article</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
.layout {
  nav {
    display: flex;
    a {
      margin: 0 10px;
      font-size: 16px;
      text-decoration: none;
      color: purple;
      font-weight: bold;
      &.router-link-active {
        color: green;
      }
    }
  }
}
</style>
