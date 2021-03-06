<template>
    <div class="flex center">
        <form action="" @submit.prevent="addItem">
            <!-- DESCRIPTION -->
            <div class="form-label">Description: <span class="error">{{ error.description }}</span></div>
            <input type="text" v-model="description" placeholder="potato..">
            <div class="flex form-row">
                <!-- DATE -->
                <div class="half">
                    <div class="form-label">Date: <span class="error">{{ error.date }}</span></div>
                    <input type="date" v-model="date" class="date-picker" >
                </div>
                <!-- CATEGORY DROPDOWN -->
                <div class="half">
                <div class="form-label">Category: </div>
                    <div>
                        <div class="dropdown" @click="toggleOpen">
                            <div class="display-option">
                                <div class="flex between align-center">
                                    <div>
                                        {{ selectedCategory }}
                                    </div>
                                    <FontAwesomeIcon :icon="arrow" class="icon"/>
                                </div>
                            </div>
                            <div v-if="openSelect" class="options-wrapper" @click="toggleOpen">
                                <li class="option" v-for="category in categories" @click="handleSelect(category)" :key="category">
                                    {{ category }}
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" @submit.prevent="addItem">Add Expense</button>
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
            const error = ref({})
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

            const addItem = () => {
                const item = {
                    description: description.value,
                    date: date.value,
                    category: selectedCategory.value
                }

                error.value.description = item.description ? '' : 'Please describe this expense!'
                error.value.date = item.date ? '' : 'Please select a date!'
                if (!item.description || !item.date) return error

                // ------ getExpenseList import external function -----
                // save list to local storage
                // $emit @added to get event list in parent
            }

            return { 
                categories, 
                selectedCategory,
                openSelect, 
                toggleOpen, 
                handleSelect, 
                arrow,
                date,
                description,
                addItem,
                error
            }
        }
    }
</script>

<style lang="scss">
.error {
    color: red;
}
.half {
    width: 50%;
}
@media screen and (max-width: 768px) {
  .date-picker {
      background-color: $white;
  }
}

</style>