<template>
    <div class="overview center">
        <h1>{{ user }}'s expenses in {{month}} '{{year}}</h1>       
        <!-- <h1> ${total}</h1> -->
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import getUser from '../../../functions/getUser'
import getDate from '../../../functions/getDate'

    export default {
        props: ['month', 'year'],
        setup(){
            const { user, load } = getUser();
            const { fullDate, curMonthStr } = getDate();
            const date = ref(null)

            onMounted(() => {
                user.value = load();
            })

            return { user, date, fullDate, curMonthStr }
        }        
    }
</script>

<style lang="scss">
    .overview {
        display: flex;
        margin-top: 2em;

        & h1:last-child {
            margin-left: 0.3em;
        }
    }

    @media screen and (max-width: 768px) {
        .overview {
            display: block;

            & h1 {
                font-size: 1.2em;

                &:last-of-type {
                    margin: 0;
                    font-size: 1.8em;
                }
            }
        }
    }
</style>