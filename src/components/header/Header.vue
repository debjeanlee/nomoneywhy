<template>
    <div class="header">
        <h1 class="title">No Money, Why?</h1>
    </div>
    <div :class="className">
        <h3 class="title">{{ message }}</h3>
    </div>
    <div v-if="show" class="name-input">
        <h3>What's your name?</h3>
        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="user">
            <div class="error">{{ error }}</div>
        </form>
    </div>
</template>

<script>
import { ref, watch } from 'vue';

    export default {
        setup(){
            const user = ref('');
            const error = ref('');
            const name = ref('Stranger');
            const message = ref(`Hello, ${name.value}! Let's find out why you don't have any money.`)
            const className = ref('welcome new');
            const show = ref(false)

            const getWelcomeMsg = () => {
                if (name.value !== 'Stranger') {
                    className.value = 'welcome'
                    return message.value = `Welcome, ${name.value}!`
                }
            }

            const handleSubmit = () => {
               if (!user.value) return error.value = `Please tell us your name!`;
               if (user.value === 'Stranger') return error.value = `Please try another name!`;
               localStorage.name = user.value;
               show.value = false;
               name.value = user.value;
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
            
            return { message, className, name, show, user, handleSubmit, error }
        }
    }
</script>

<style lang="scss">
.header {
    text-align: left;
    background-color: $lgreen;
    padding: 1em 2em;
}

.title {
    margin: 0;
}

.welcome {
    width: 55%;
    margin: 2em auto;
    padding: 2em;
    border-radius: 2em;
    background-color: $yellow;
    @include fade-in-bottom;
}

.new {
    @extend .welcome;
    position: relative;
    margin: 10em auto 0 auto;
}

.name-input {
    @extend .new;
    margin-top: 2em;
}

@media (max-width: 425px) {
    .welcome {
        width: 70%;
    }
}

</style>