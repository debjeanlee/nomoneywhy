<template>
    <div>
        <Welcome v-if="user === 'Stranger'" @changed="this.$emit('changed')"/>
        <Overview v-if="user !== 'Stranger'" />
        <ExpenseList v-if="user !== 'Stranger'" />
    </div>
</template>

<script>
import Welcome from './Welcome';
import ExpenseList from './expenses/ExpenseList';
import Overview from './overview/Overview.vue';

    export default {
        props: ['user'],
        components: { Welcome, ExpenseList, Overview },
        setup(){
          
        }
    }
</script>

<style lang="scss">

</style>