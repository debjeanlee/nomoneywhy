import { ref } from 'vue'

const getExpenses = () => {
    // get list of all expenses
    const allExpensesList = ref(localStorage.expenses ? JSON.parse(localStorage.expenses) : [])

    // get list of expenses by month
    const getMonthExpenses = (month) => {
        return allExpensesList.value.filter((el) => parseInt(el.month) === month)
    }
    return { allExpensesList, getMonthExpenses }
}

export default getExpenses

// --- what expense object should look like
// expenses = [{
//     description: String,
//     fullDate: String,
//     date: Number,
//     month: Number,
//     year: Number,
//     price: Number,
// }]