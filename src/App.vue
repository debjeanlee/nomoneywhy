<template>
  <Header />
</template>

<script>
import Header from './components/header/Header'

export default {
  name: 'App',
  components: { Header }
}
</script>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: $navy;
  margin: 0;
  padding: 0;
  background-color: $white;
}

</style>
