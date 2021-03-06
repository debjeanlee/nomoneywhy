<template>
    <div class="overview center">
        <h1>{{ user }}'s expenses in {{curMonthStr}}: </h1>       
        <h1>$ {total}</h1>
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
    .overview {
        display: flex;
        margin-top: 2em;
    }

    @media screen and (max-width: 768px) {
        .overview {
            display: block;

            & h1 {
                font-size: 1.2em;

                &:last-of-type {
                    font-size: 1.8em;
                }
            }
        }
    }
</style>