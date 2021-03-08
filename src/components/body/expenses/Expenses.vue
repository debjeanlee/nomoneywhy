<template>
    <!-- "User" expenses in month year -->
    <Overview :month="monthStr" :year="yearTwoDigit" />
    <div class="container">
        <!-- AddExpense Modal -->
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
        <!-- add click logic for button -->
            <div class="month-btn" @click="goPrev">
                <font-awesome-icon :icon="left" />
                {{ prevMonth.month }} {{ prevMonth.year }}
            </div>
            <div class="total-spent">
                <h1>${{ total }}</h1>
            </div>
        <!-- add click logic for button -->
            <div class="month-btn" @click="goNext">
                {{ nextMonth.month }} {{ nextMonth.year }}
                <font-awesome-icon :icon="right" />
            </div>
        </div>

        <!-- CHART -->
        <ChartVisual />

        <div class="flex button-row">
        <!-- *** DOES NOT WORK YET **** filter categories -->
            <button class="list-item filter" >Filter Selection</button>
        <!-- Add Expense Button -->
            <button class="list-item add" @click="() => addItem = !addItem">Add Item</button>
        </div>

        <!-- Expenses -->
        <ExpenseList :v-if="curList" :list="curList" @deleted="handleAdd"/>
        <h1 v-if="showMsg">No expenses added for this month</h1>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import AddExpense from './AddExpense'
import Modal from '../../utilities/Modal'
import ChartVisual from './ChartVisual'
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
         const { month, getMonthStr, year } = getDate();
         const addItem = ref(false)
         const monthStr = ref(null);
         const selectedMonth = ref(month)
         const prevMonth = ref({})
         const nextMonth = ref({})
         const curList = ref([])
         const total = ref(null)
         const showMsg = ref(null)
         const yearTwoDigit =ref(null)

        const closeModal = () => {
            return addItem.value = false;
         }  

        // SORT OUT SORTING BY DATE
        const getExpenseList = () => {
            const list = getMonthExpenses(selectedMonth.value);
            return curList.value = list;
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

        const getMonthYear = () => {
            yearTwoDigit.value = year.toString().slice(2)
            monthStr.value = getMonthStr(selectedMonth.value)
            prevMonth.value.month = getMonthStr(selectedMonth.value - 1)
            prevMonth.value.year = prevMonth.value.month === 'December' ? (parseInt(yearTwoDigit.value)-1) : yearTwoDigit.value
            nextMonth.value.month = getMonthStr(selectedMonth.value + 1)
            nextMonth.value.year = nextMonth.value.month === 'January' ? (parseInt(yearTwoDigit.value)+1) : yearTwoDigit.value
        }

        const goPrev = () => {
            selectedMonth.value -= 1
            curList.value = ''
            getExpenseList();
            getMonthYear();
            calcMonthExpenditure();
            showMsg.value = curList.value.length === 0 ? true : false
        }

        const goNext = () => {
            selectedMonth.value += 1
            curList.value = ''
            getExpenseList();
            getMonthYear();
            calcMonthExpenditure();
            showMsg.value = curList.value.length === 0 ? true : false
        }


        onMounted(() => {
            getMonthYear()
            getExpenseList()
            calcMonthExpenditure()
            showMsg.value = curList.value.length === 0 ? true : false
        })
        return { 
            addItem, 
            closeModal, 
            curList, 
            handleAdd, 
            monthStr,
            yearTwoDigit,
            prevMonth, 
            nextMonth, 
            total, 
            left, 
            right, 
            showMsg,
            goPrev,
            goNext
            }
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
        &:hover{
            cursor: pointer;
        }
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