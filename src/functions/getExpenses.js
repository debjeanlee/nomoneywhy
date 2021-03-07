
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

    const getNewId = () => {
        const all = getAllExpenses()
        let biggest = 0;
        all.forEach(el => {
            let cur = Number(el.id)
            if (cur > biggest) {
                biggest = Number(el.id)
            }
        })
        return biggest+=1;
    }

    return { getAllExpenses, getMonthExpenses, getNewId }
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