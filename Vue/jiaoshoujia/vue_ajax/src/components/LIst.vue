<template>
<div class="table">
  <div class="item" v-for="(user, index) in items" :key='index'>
    <img :src="user.avatar_url" alt="">
    <p><a :href="user.html_url">{{user.login}}</a></p>
  </div>
</div>

</template>

<script>
export default {
  name: 'List',
  props: {
    items: Array
  }
}
</script>
