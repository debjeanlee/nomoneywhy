<template>
    <div>
        <h1>
            {{ user }}'s expenses in {{curMonthStr}}: ${total}
        </h1>       
    </div>
</template>

<script>
import { ref } from 'vue'
import getUser from '../../../functions/getUser'
import getDate from '../../../functions/getDate'

    export default {
     setup(){
         const { load } = getUser();
         const { fullDate, curMonthStr } = getDate();
         const user = load();
         const date = ref(null)

         return { user, date, fullDate, curMonthStr }
     }        
    }
</script>

<style lang="scss">

</style>