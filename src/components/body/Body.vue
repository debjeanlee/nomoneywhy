<template>
    <div>
        <Welcome v-if="!user" @changed="getUser"/>

        
    </div>
</template>

<script>
import { ref } from '@vue/runtime-core';
import Welcome from './Welcome';

    export default {
        components: { Welcome },
        setup(){
            const user = ref('');

            const getUser = () => {
                user.value = localStorage.name;
            }
            
            getUser();
            return { user, getUser }
        }
    }
</script>

<style lang="scss">

</style>