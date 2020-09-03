<template>
 <div class="right">
    <p>评论回复：</p>
    <div class="item" :key='index' v-for="(item,index) in content">
      <button @click='dele(index)'>删除</button>
      <span>{{item.anme}}说</span>
      <p>{{item.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: Array,
    delet: {
      type: Function,
      required: true
    }
  },
  name: 'Lest',
  data () {
    return {
    }
  },
  methods: {
    dele (index) {
      this.delet(index)
    }
  }
}
</script>

<style>
    .right {
      float: left;
      width: 75%;
      padding: 10px;
      margin-left: 40px;
      box-sizing: border-box;
    }

    .right .item {
      position: relative;
      width: 100%;
      border: 0.5px solid #ccc;
      padding: 10px;
      box-sizing: border-box;
      margin-bottom: 10px;
    }

    .right .item button {
      position: absolute;
      top: 0;
      right: 5px;
    }

    .right .item p {
      text-indent: 3em;
    }
</style>
