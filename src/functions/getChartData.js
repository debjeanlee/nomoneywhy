const getChartData = () => {

    function getValues(data){
        try {
            let food = 0;
            let bills = 0;
            let transport = 0;
            let entertainment = 0;
            let healthcare = 0;
            let housing = 0;
            let education = 0;
            let clothes = 0;
            let others = 0;

            data.forEach(el => {
                if (el.category === 'Food') return food += parseInt(el.price)
                if (el.category === 'Bills') return bills += parseInt(el.price)
                if (el.category === 'Transport') return transport += parseInt(el.price)
                if (el.category === 'Entertainment') return entertainment += parseInt(el.price)
                if (el.category === 'Healthcare') return healthcare += parseInt(el.price)
                if (el.category === 'Housing') return housing += parseInt(el.price)
                if (el.category === 'Education') return education += parseInt(el.price)
                if (el.category === 'clothes') return clothes += parseInt(el.price)
                if (el.category === 'Others') return others += parseInt(el.price)
            })

            const arr = [food, bills, transport, entertainment, healthcare, housing, education, clothes, others];
            console.log(arr)
        } catch (error) {
            console.log(error)
        }
    }

    return { getValues }
}

export default getChartData