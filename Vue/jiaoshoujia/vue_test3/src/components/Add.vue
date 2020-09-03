<template>

<div class="left">
    <p>用户名</p>
    <input type="text" placeholder="用户名" v-model="name">
    <p>评论内容</p>
    <textarea cols="30" rows="10" v-model="text"></textarea>
    <button @click="add(addd)">提交</button>
</div>

</template>

<script>

export default {
  props: {
    addd: {
      type: Function,
      required: true
    }
  },
  name: 'Add',
  data () {
    return {
      name: '',
      text: ''
    }
  },
  methods: {
    add () {
      console.log(this)
      const {name, text} = this

      if (!name.trim() || !text.trim()) {
        return window.alert('用户名或内容不能为空')
      }
      this.addd({name, text})
      this.name = ''
      this.text = ''
    }
  }
}

</script>

<style>
 .left {
      float: left;
      width: 19%;
      padding: 20px;
      box-sizing: border-box;
      /* border: 1px solid #000; */
      /* height: 100px; */
    }

    .left input, .left textarea {
      width: 100%;
      margin-bottom: 20px;
    }

    .left button {
      float: right;
    }
</style>
