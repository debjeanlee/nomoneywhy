<template>
    <div>
        <div class="flex center">
            <PieChart :month="month" :year="year" />
        </div>
    </div>
</template>

<script>
import PieChart from '../../utilities/PieChart'

    export default {
        components: { PieChart },
        props: { month: Number, year: String },
        setup(){
            
        }
    }
</script>

<style lang="scss">

</style>