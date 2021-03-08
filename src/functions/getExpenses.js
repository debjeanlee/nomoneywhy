import getDate from './getDate';

const getExpenses = () => {
    // get list of all expenses
    const getAllExpenses = () => {
        return localStorage.expenses ? JSON.parse(localStorage.expenses) : []
    }

    // get cur Year
    const { year } = getDate();
    // get list of expenses by month
    const getMonthExpenses = (month, yr) => {
        const all = getAllExpenses()
        if (!yr) {
            return all.filter((el) => (parseInt(el.month) === month && parseInt(el.year) === year))
        }
        return all.filter((el) => (parseInt(el.month) === month && parseInt(el.year) === yr))
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