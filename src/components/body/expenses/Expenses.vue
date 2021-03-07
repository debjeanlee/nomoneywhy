<template>
    <div class="container">
        <!-- Add Expense Modal -->
        <teleport to='#modals'>
            <Modal v-if="addItem" @close="closeModal" >
                <slot>
                    <!-- ADD THIS AFTER GETTING EXPENSE LOGIC <AddExpense @added="getExpenseList"/> -->
                    <AddExpense @added="handleAdd"/>
                </slot>
            </Modal>
        </teleport>
        <!-- Visualisation -->
        <ChartVisual />
        <!-- Add Expense Button -->
        <div class="flex button-row">
            <button class="list-item filter" >Filter Selection</button>
            <button class="list-item add" @click="() => addItem = !addItem">Add Item</button>
        </div>
        <!-- Expenses -->
        <ExpenseList :v-if="curList" :list="curList" />
        <!-- filter dates? -->
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import AddExpense from './AddExpense'
import Modal from '../../utilities/Modal'
import ChartVisual from './visuals/ChartVisual'
import getExpenses from '../../../functions/getExpenses'
import getDate from '../../../functions/getDate'
import ExpenseList from './ExpenseList.vue'

    export default {
     components: { AddExpense, Modal, ChartVisual, ExpenseList },
     setup(){
         const { getMonthExpenses } = getExpenses();
         const { month } = getDate();
         const addItem = ref(false)
         const selectedMonth = ref(month)
         const curList = ref([])

        const closeModal = () => {
            return addItem.value = false;
         }  

        const getExpenseList = () => {
            return curList.value = getMonthExpenses(selectedMonth.value);
        }

        const handleAdd = () => {
            curList.value = '';
            getExpenseList();
            closeModal();
        }

        onMounted(() => {
            getExpenseList()
        })
        return { addItem, closeModal, curList, handleAdd }
     }
    }
</script>

<style lang="scss" scoped>
    .button-row {
        justify-content: space-around;   
    }
    button {
        width: 45%;
        color: $white;

        &:focus {
            outline: none;
        }
    }

    .filter {
        border: 2px solid $p8;
        background-color: $p8;

        &:hover {
            color: lighten($p8,20%);
        }
    }

    .add {
        border: 2px solid $dgreen;
        background-color: $dgreen;

        &:hover {
            color: lighten($dgreen,55%);
        }
    }
</style>