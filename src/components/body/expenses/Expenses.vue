<template>
    <Overview v-if="user !== 'Stranger'" />
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
        <!-- Month Navigation -->
        <div class="flex between align-center month-nav">
            <div class="month-btn">
                <font-awesome-icon :icon="left" />
                {{ prevMonth }}
            </div>
            <div class="total-spent">
                <h1>${{ total }}</h1>
            </div>
            <div class="month-btn">
                {{ nextMonth }}
                <font-awesome-icon :icon="right" />
            </div>
        </div>
        <!-- Visualisation -->
        <ChartVisual />
        <!-- Add Expense Button -->
        <div class="flex button-row">
            <button class="list-item filter" >Filter Selection</button>
            <button class="list-item add" @click="() => addItem = !addItem">Add Item</button>
        </div>
        <!-- Expenses -->
        <ExpenseList :v-if="curList" :list="curList" @deleted="handleAdd"/>
        <h1 v-if="showMsg">No expenses added for this month</h1>
        <!-- filter categories -->
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
import Overview from './Overview'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

    export default {
     components: { AddExpense, Modal, ChartVisual, ExpenseList, Overview, FontAwesomeIcon },
     setup(){
         const left = faAngleDoubleLeft
         const right = faAngleDoubleRight
         const { getMonthExpenses } = getExpenses();
         const { month, getMonthStr } = getDate();
         const addItem = ref(false)
         const selectedMonth = ref(month)
         const prevMonth = ref(null)
         const nextMonth = ref(null)
         const curList = ref([])
         const total = ref(null)
         const showMsg = ref(null)

        const closeModal = () => {
            return addItem.value = false;
         }  

        const getExpenseList = () => {
            return curList.value = getMonthExpenses(selectedMonth.value);
        }

        const calcMonthExpenditure = () => {
            const count = curList.value.reduce((total, item) => total += parseFloat(item.price), 0)
            return total.value = count.toFixed(2);
        }

        const handleAdd = () => {
            curList.value = '';
            getExpenseList();
            calcMonthExpenditure();
            showMsg.value = false;
            closeModal();
        }

        onMounted(() => {
            prevMonth.value = getMonthStr(month - 1)
            nextMonth.value = getMonthStr(month + 1)
            getExpenseList()
            calcMonthExpenditure()
            showMsg.value = curList.value.length === 0 ? true : false
        })
        return { addItem, closeModal, curList, handleAdd, prevMonth, nextMonth, total, left, right, showMsg }
     }
    }
</script>

<style lang="scss" scoped>
    .month-nav {
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 2px;
        color: $gray;
        margin-bottom: 1em;    
    }

    .month-btn {
        width: 20vw;
    }

    .total-spent {
        width: 40vw;
        color: $navy;
        font-size: 1.5em;
    }

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

    @media screen and (max-width: 768px) {
    .month-nav {
        margin-top: 1em;
       font-size: 0.8em;
    }

    .total-spent {
        width: 40vw;
        color: $navy;
        font-size: 1.5em;
    }

    }
</style>