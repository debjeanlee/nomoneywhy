<template>
    <div>
        <div>
            <div v-for="(item, i) in list" :key="i">
                <ListItem :item="item" @deleted="$emit('deleted')"/>
            </div>
        </div>
    </div>
</template>

<script>
import ListItem from './ListItem'

    export default {
    props: ['list'],
    components: { ListItem },
    }
</script>

<style lang="scss">

</style>