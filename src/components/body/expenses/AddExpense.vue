<template>
    <div class="flex center">
        <form action="" @submit.prevent="addItem">
            <!-- DESCRIPTION -->
            <div class="form-label">Description: <span class="error">{{ error.description }}</span></div>
            <input type="text" v-model="description" placeholder="potato..">
            <!-- DESCRIPTION -->
            <div class="form-label">Price: <span class="error">{{ error.price }}</span></div>
            <input type="number" step=".01" v-model="price" placeholder="$">
                <!-- DATE -->
            <div class="flex form-row">
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
            <button type="submit" @submit.prevent="addItem" class="submit">Add Expense</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import getCategories from '../../../functions/getCategories'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import getExpenses from '../../../functions/getExpenses'

    export default {
        components: { FontAwesomeIcon },
        setup(props, {emit}){
            const { categories } = getCategories();
            const { getAllExpenses, getNewId } = getExpenses();
            const error = ref({})
            const description = ref('')
            const date = ref(null)
            const arrow = faChevronDown
            const openSelect = ref(false)
            const selectedCategory = ref('Food');
            const price = ref('');
            
            const toggleOpen = () => {
                return openSelect.value = !openSelect.value
            }

            const handleSelect = (cat) => {
                selectedCategory.value = cat;
                toggleOpen();
            }

            const addItem = () => {
                error.value.description = description.value ? '' : 'Please describe this expense'
                error.value.price = price.value ? '' : 'Please input the price'
                error.value.date = date.value ? '' : 'Please select a date'
                if (!description.value || !date.value || !price.value) return error

                const id = getNewId();
                const selectedDate = date.value
                const item = {
                    description: description.value,
                    date: selectedDate.slice(8),
                    month: selectedDate.slice(5,7),
                    year: selectedDate.slice(0,4),
                    category: selectedCategory.value,
                    price: price.value,
                    id
                }
                const newList = getAllExpenses();
                newList.unshift(item)

                localStorage.expenses = JSON.stringify(newList);
                emit('added')
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
                error,
                price
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

  .submit {
      margin-bottom: 4em;
  }
}

</style>