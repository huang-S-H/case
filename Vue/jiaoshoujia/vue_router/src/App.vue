<template>
  <div id="app">
<h2> 路由初体验 </h2>
      <aside class="aside">
        <router-link to='/home'>home</router-link>
        <router-link to='/'>about</router-link>
      </aside>
      <div class="main">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
