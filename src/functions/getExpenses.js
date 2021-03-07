
const getExpenses = () => {
    // get list of all expenses
    const getAllExpenses = () => {
        return localStorage.expenses ? JSON.parse(localStorage.expenses) : []
    }

    // get list of expenses by month
    const getMonthExpenses = (month) => {
        const all = getAllExpenses()
        return all.filter((el) => parseInt(el.month) === month)
    }
    return { getAllExpenses, getMonthExpenses }
}

export default getExpenses

// --- what expense object should look like
// expenses = [{
//     description: String,
//     date: Number,
//     month: Number,
//     year: Number,
//     price: Number,
//     category
// }]