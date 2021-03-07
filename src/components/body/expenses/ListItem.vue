<template>
    <div class="list-item flex between">
        <div class="item-left">
            {{item.date}} {{month}}
        </div>
        <div class="item-center flex between">
            <div>
                {{item.description}}
            </div>
            <div>
                ${{item.price}}
            </div>
        </div>
        <div class="item-right flex align-center between">
            <button>
                <font-awesome-icon :icon="myIcon" />
            </button>
            <button>x</button>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import getDate from '../../../functions/getDate'

    export default {
        props: ['item'],
        components: { FontAwesomeIcon },
        setup(props){
            const { getMonthStr } = getDate()
            const myIcon = faEdit
            const month = getMonthStr(parseInt(props.item.month)).slice(0,3)
            
            return { myIcon, month }
        }
    }
</script>

<style lang="scss">
.list-item {
    width: 60vw;
    margin: 1em auto;
    padding: 1em;
    background-color: lighten($lgreen, 10%);
    border-radius: 2em;
    border: 2px solid lighten($lgreen, 10%);
    @include fade-in-bottom;

    &:hover{
        border: 2px solid $lgreen;
    }
    
}

.item-left {
    margin: auto 0;
    font-size: 0.8em;
    font-weight: 600;
    letter-spacing: 2px;
    color: $gray;
}

.item-center {
    width: 50%;
}

.item-right {
    width: 10%;
}

button {
    background-color: lighten($lgreen, 10%);
    border: none;
    font-weight: 600;

    &:hover {
        cursor: pointer;
        color: $dgreen;
    }
}

@media screen and (max-width: 768px) {
    .list-item {
        width: 78vw;
    }
    
    .item-center {
        width: 55%;
    }

    .item-right {
        width: 15%;
    }
}


@media screen and (max-width: 425px) {
    .list-item {
        width: 85vw;
        padding: 1em 0.5em;
    }

    .item-center {
        width: 50%;
    }

    .item-right {
        width: 20%;
    }
}
</style>