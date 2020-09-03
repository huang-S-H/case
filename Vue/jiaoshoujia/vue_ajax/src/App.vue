<template>
  <div id="app">
    <Search />
    <Main />
  </div>
</template>

<script>
import Search from './components/Search'
import Main from './components/Main'

export default {

  name: 'App',
  components: {
    Search,
    Main
  }
}
</script>
