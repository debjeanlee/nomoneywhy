<template>
    <div class="list-item flex between">
        <div class="item-left">
            <div>
                {{item.date}} {{month}}
            </div>
            <div>
                {{ category }}
            </div>
        </div>
        <div class="item-center flex between align-center">
            <div class="item-description">
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
            <button @click.prevent="deleteItem">x</button>
        </div>
    </div>
</template>

<script>
import getExpenses from '../../../functions/getExpenses'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import getDate from '../../../functions/getDate'
import { computed } from 'vue'

    export default {
        props: ['item'],
        components: { FontAwesomeIcon },
        setup(props, {emit}){
            const { getMonthStr } = getDate()
            const myIcon = faEdit
            const month = getMonthStr(parseInt(props.item.month)).slice(0,3)
            const { getAllExpenses } = getExpenses();

            const category = computed(() => {
                let cat = props.item.category
                if (cat === 'Entertainment') {
                    cat = 'Ent'
                }
                return cat
            })
            
            const deleteItem = () => {
                let all = getAllExpenses();
                const removed = all.filter(item => {
                    if (item.id === props.item.id) {
                        return
                    }
                    return item
                })
                localStorage.expenses = JSON.stringify(removed)
                emit('deleted')
            }
            return { myIcon, month, category, deleteItem }
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
    font-size: 0.6em;
    font-weight: 600;
    letter-spacing: 2px;
    color: $gray;
    width: 18%;
    display: flex;
    justify-content: space-between;
}

.item-center {
    width: 60%;
}

.item-description {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.8em;
    letter-spacing: 1px;
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

    .item-left {
        display: block;
        width: 20%; 
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

    .item-left {
        width: 22%;
    }

    .item-center {
        width: 50%;
    }

    .item-right {
        width: 20%;
    }
}
</style>