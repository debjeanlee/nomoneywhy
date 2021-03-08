<template>
    <div>
        <div class="flex center">
            <PieChart :values="values" :categories="categories"/>
        </div>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import PieChart from '../../utilities/PieChart'

    export default {
        components: { PieChart },
        props: { data: Array },
        setup(props){
            const values = ref([])
            const categories = ref([])

            function getCategories(){
                let arr = [];
                let vals = []
                props.data.forEach(el => {
                    if (!arr.includes(el.category)) {
                        arr.push(el.category)
                    }
                })
                arr.forEach(() => vals.push(0));
                categories.value = arr
                values.value = vals
            }

            function getValues(){
                props.data.forEach(el => {
                    let index = categories.value.indexOf(el.category)
                    let val = values.value[index] += parseInt(el.price)
                    values.value.splice(index, 1, val)
                })                
            }

            watch(() => props.data, () => {
                if (props.data.length === 0) {
                    values.value = null
                    categories.value = null
                    return 
                }
                getCategories()
                getValues()
            })
            return { values, categories }
        },
    }
</script>

<style lang="scss">

</style>