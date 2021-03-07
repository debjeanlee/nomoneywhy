<template>
    <div>
        <div class="list-wrapper">
            <div v-for="(item, i) in list" :key="i">
                <ListItem :item="item" />
            </div>
        </div>
    </div>
</template>

<script>
// import { watch } from 'vue'
import ListItem from './ListItem'

    export default {
    props: ['list'],
    components: { ListItem },
      setup(){
        //   watch(this.list, () => {
        //       console.log(this.list)
        //   })
      }
    }
</script>

<style lang="scss">

.list-wrapper {
}
</style>