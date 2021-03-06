<template>
    <div>
        <YellowBox :message="message"/>
        <YellowBox v-if="show" message="What's your name?" >
            <slot>
                <form @submit.prevent="handleSubmit">
                    <input type="text" v-model="user">
                    <div class="error">{{ error }}</div>
                </form>
            </slot>
        </YellowBox>
    </div>
</template>

<script>
import YellowBox from '../utilities/YellowBox.vue';
import { ref, watch } from 'vue';

    export default {
        components: { YellowBox },
        setup(){
            const user = ref('');
            const error = ref('');
            const name = ref('Stranger');
            const message = ref(`Hello, ${name.value}! Let's find out why you don't have any money.`)
            const show = ref(false)

            const getWelcomeMsg = () => {
                if (name.value !== 'Stranger') {
                    return message.value = `Welcome, ${name.value}!`
                }
            }

            const handleSubmit = () => {
               if (!user.value) return error.value = `Please tell us your name!`;
               if (user.value === 'Stranger') return error.value = `Please try another name!`;
               localStorage.name = user.value;
               show.value = false;
               name.value = user.value;
               this.$emit('user')
            }
            
            getWelcomeMsg();
            setTimeout(() => {
                if (name.value === 'Stranger'){
                    show.value = true;
                }
            }, 1500)

            watch(name, () => {
                getWelcomeMsg();
            })
            return { message, show, user, handleSubmit, error }
        }
    }
</script>

<style lang="scss">

</style>