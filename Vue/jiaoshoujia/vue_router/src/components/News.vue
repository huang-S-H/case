<template>
  <ul>
    <li v-for="(item, index) in news" :key='index'>{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      news: ['news1', 'news2', 'news3', 'news4']
    }
  }
}
</script>

<style>
</style>
