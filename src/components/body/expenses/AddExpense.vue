<template>
    <div>
        <div>
            <div class="dropdown" @click="toggleOpen" :ref="selectedCategory">
                <div class="flex between align-center">
                    <div>{{ selectedCategory }}</div>
                    <FontAwesomeIcon :icon="arrow" />
                </div>
            </div>
            <div v-if="openSelect" class="options-wrapper">
                <li class="option" v-for="category in categories" @click="handleSelect(category)" :key="category">
                    {{ category }}
                </li>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import getCategories from '../../../functions/getCategories'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

    export default {
        components: { FontAwesomeIcon },
        setup(){
            const arrow = faChevronDown
            const openSelect = ref(false)
            const selectedCategory = ref('Food');
            const { categories } = getCategories();
            
            const toggleOpen = () => {
                return openSelect.value = !openSelect.value
            }

            const handleSelect = (cat) => {
                selectedCategory.value = cat;
                toggleOpen();
            }

            return { categories, selectedCategory, openSelect, toggleOpen, handleSelect, arrow }
        }
    }
</script>

<style lang="scss">

</style>