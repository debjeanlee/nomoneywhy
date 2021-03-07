<template>
    <div>
        <Welcome v-if="user === 'Stranger'" @changed="this.$emit('changed')"/>
        <Expenses v-if="user !== 'Stranger'" />
    </div>
</template>

<script>
import Welcome from './Welcome';
import Expenses from './expenses/Expenses';
import getCategories from '../../functions/getCategories'

    export default {
        props: ['user'],
        components: { Welcome, Expenses },
        setup(){
          
          getCategories();
        }
    }
</script>

<style lang="scss">

</style>