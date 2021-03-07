<template>
    <div class="container">
        <!-- Add Expense Modal -->
        <teleport to='#modals'>
            <Modal v-if="addItem" @close="closeModal" >
                <slot>
                    <!-- ADD THIS AFTER GETTING EXPENSE LOGIC <AddExpense @added="getExpenseList"/> -->
                    <AddExpense />
                </slot>
            </Modal>
        </teleport>
        <!-- Visualisation -->
        <ChartVisual />
        <!-- Add Expense Button -->
        <button @click="() => addItem = !addItem">+</button>
        <!-- Expenses -->
        <h1>List of expenses here</h1>
        <!-- filter dates? -->
    </div>
</template>

<script>
import { ref } from 'vue'
import AddExpense from './AddExpense'
import Modal from '../../utilities/Modal'
import ChartVisual from './visuals/ChartVisual'

    export default {
     components: { AddExpense, Modal, ChartVisual },
     setup(){
         const add = ref(false)
         const addItem = ref(false)

        const closeModal = () => {
            return addItem.value = false;
         }

        //  ------ getExpenseList import external function -----

         return { add, addItem, closeModal }
     }
    }
</script>

<style lang="scss" scoped>
button {
    @include button-default;
}
</style>