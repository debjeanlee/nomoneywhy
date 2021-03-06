<template>
  <Header />
  <Body />
</template>

<script>
import Header from './components/header/Header'
import Body from './components/body/Body'

export default {
  name: 'App',
  components: { Header, Body }
}
</script>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  box-sizing: border-box;
  color: $navy;
  margin: 0;
  padding: 0;
  background-color: $white;
}

</style>
