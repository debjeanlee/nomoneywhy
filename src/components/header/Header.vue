<template>
    <div class="header">
        <h1>
            <FontAwesomeIcon class="wallet" :icon="myIcon" />
            No Money, <em>Why?</em>
        </h1>
    </div>
</template>

<script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faWallet } from '@fortawesome/free-solid-svg-icons'

    export default {
        components: { FontAwesomeIcon },
        setup(){
            const myIcon = faWallet
            return { myIcon }
        },
    }
</script>

<style lang="scss">
.header {
    text-align: left;
    background-color: $lgreen;
    padding: 1em 2em;
}
.wallet {
    margin-right: 0.2em;
}
</style>