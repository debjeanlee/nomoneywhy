<template>
    <div>
        <Welcome v-if="user === 'Stranger'" @changed="this.$emit('changed')"/>
        
    </div>
</template>

<script>
import Welcome from './Welcome';

    export default {
        props: ['user'],
        components: { Welcome },
        setup(){
          
        }
    }
</script>

<style lang="scss">

</style>