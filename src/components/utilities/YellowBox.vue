<template>
    <div class="welcome">
        <h3 class="title">{{ message }}</h3>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            message: String,
        }
    }
</script>

<style lang="scss">
    .welcome {
        width: 55%;
        margin: 2em auto;
        padding: 2em;
        border-radius: 2em;
        background-color: $yellow;
        @include fade-in-bottom;
    }

@media (max-width: 425px) {
    .welcome {
        width: 70%;
    }
}
</style>