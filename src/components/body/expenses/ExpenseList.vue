<template>
    <div class="container">
        <!-- Add Expense Modal -->
        <teleport to='#modals'>
            <Modal v-if="addItem" @close="closeModal" >
                <slot>
                    <AddExpense />
                </slot>
            </Modal>
        </teleport>
        <!-- Visualisation -->
        <h1>Graph here</h1>
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

    export default {
     components: { AddExpense, Modal },
     setup(){
         const add = ref(false)
         const addItem = ref(false)

        const closeModal = () => {
            return addItem.value = false;
         }

         return { add, addItem, closeModal }
     }
    }
</script>

<style lang="scss" scoped>
button {
    @include button-default;
}
</style>