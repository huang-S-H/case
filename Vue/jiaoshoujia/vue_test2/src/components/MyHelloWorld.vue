<template>
    <div>
        <h2>{{text}}</h2>
        <img src="../assets/logo.png" alt="">
    </div>
</template>

<script>
export default {
  name: 'MyHelloWorde',
  data () {
    return {
      text: 'is MyHelloWorde'
    }
  }

}
</script>

<style>
    img {
        width: '200px';
        height: '200px';
    }
</style>
