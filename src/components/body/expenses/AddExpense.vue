<template>
    <div class="flex center">
        <form action="">
            <!-- DESCRIPTION -->
            <div class="form-label">Description: </div>
            <input type="text" v-model="description" placeholder="potato..">
            <!-- DATE -->
            <div class="form-label">Date: </div>
            <input type="date" v-model="date" class="date-picker" >
            <!-- CATEGORY DROPDOWN -->
            <div class="form-label">Category: </div>
            <div>
                <div class="dropdown" @click="toggleOpen">
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
        </form>
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
            const { categories } = getCategories();
            const description = ref('')
            const date = ref(null)
            const arrow = faChevronDown
            const openSelect = ref(false)
            const selectedCategory = ref('Food');
            
            const toggleOpen = () => {
                return openSelect.value = !openSelect.value
            }

            const handleSelect = (cat) => {
                selectedCategory.value = cat;
                toggleOpen();
            }

            return { 
                categories, 
                selectedCategory,
                openSelect, 
                toggleOpen, 
                handleSelect, 
                arrow,
                date,
                description
            }
        }
    }
</script>

<style lang="scss">
@media screen and (max-width: 768px) {
  .date-picker {
      background-color: $white;
  }
}

</style>