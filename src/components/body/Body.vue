<template>
    <div>
        <Welcome v-if="user === 'Stranger'" @changed="this.$emit('changed')"/>
        <Overview v-if="user !== 'Stranger'" />
        <Expenses v-if="user !== 'Stranger'" />
    </div>
</template>

<script>
import Welcome from './Welcome';
import Expenses from './expenses/Expenses';
import Overview from './overview/Overview.vue';
import getCategories from '../../functions/getCategories'

    export default {
        props: ['user'],
        components: { Welcome, Expenses, Overview },
        setup(){
          
          getCategories();
        }
    }
</script>

<style lang="scss">

</style>