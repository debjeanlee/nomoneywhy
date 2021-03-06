<template>
    <div class="container">
        <AddExpense />
        List of expenses here
        <!-- filter dates? -->
    </div>
</template>

<script>
import { ref } from 'vue'
import AddExpense from './AddExpense'
    export default {
     components: { AddExpense }   ,
     setup(){
         const add = ref(false)

         return { add }
     }
    }
</script>

<style lang="scss">

</style>