<template>
    <div class="modal-wrapper flex center">
        <div class="modal">
            <div class="row flex" @click="$emit('close')">
                <button>x</button>
            </div>   
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .modal-wrapper {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        background-color: rgba(0,0,0,0.7);
    }

    .modal {
        @include fade-in-bottom;
        margin-top: 10em;
        position: relative;
        width: 80vw;
        height: 25em;
        border-radius: 2em;
        background-color: $yellow;
    }

    .row {
        margin-top: 2em;
        padding-right: 2em;
        width: stretch;
        flex-direction: row-reverse;
    }

    button {
        width: 2em;
        height: 2em;
        text-align: center;
        background-color: red;
        border: none;
        border-radius: 0.2em;
        font-size: 1em;
        color: $white;

        &:hover {
            background-color: lighten($color: red, $amount: 8%);
            cursor: pointer;
        }
    }

@media screen and (max-width: 768px) {
    .modal {
        width: 95vw;
        height: 33em;
        overflow: scroll;
    }

    .row {
        padding-right: 1em;
    }
}

@media screen and (max-width: 425px) {
    .modal {
        margin-top: 5em;
    }

    .row {
        padding-right: 1.6em;
    }
}
</style>