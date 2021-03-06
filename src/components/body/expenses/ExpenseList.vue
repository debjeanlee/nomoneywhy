<template>
    <select v-model="selectedCategory">
        <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
        </option>
    </select>
</template>

<script>
import { ref } from 'vue';
import getCategories from '../../../functions/getCategories'

    export default {
        setup(){
            const selectedCategory = ref('Food');
            const { categories } = getCategories();
            
            return { categories, selectedCategory }
        }


    }
</script>

<style lang="scss">

</style>