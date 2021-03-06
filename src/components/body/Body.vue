<template>
    <div>
        <Welcome v-if="user === 'Stranger'" @changed="this.$emit('changed')"/>
        <ExpenseList />
    </div>
</template>

<script>
import Welcome from './Welcome';
import ExpenseList from './expenses/ExpenseList';

    export default {
        props: ['user'],
        components: { Welcome, ExpenseList },
        setup(){
          
        }
    }
</script>

<style lang="scss">

</style>