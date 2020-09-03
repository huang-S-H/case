<template>
  <div class="home">
    <h3>home组件</h3>
    <div class="nav">
      <router-link to='/home/news'>news</router-link>
      <router-link to='/home/msgs'>msgs</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
</style>
