<template>
  <Header :user="user" />
  <Body :user="user" @changed="load" />
</template>

<script>
import Header from './components/header/Header'
import Body from './components/body/Body'
import getUser from './functions/getUser'

export default {
  name: 'App',
  components: { Header, Body },
  setup(){
    const { user, load } = getUser();
    load();
    

    return { user, load }
  }
}
</script>

<style lang="scss">

</style>
