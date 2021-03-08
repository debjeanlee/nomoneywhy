<template>
    <div>
        <canvas id="chart" ref="canvas"></canvas>
        {{month}} {{year}}
    </div>
</template>

<script>
import Chart from 'chart.js'
import { onMounted, ref } from 'vue'
import getExpenses from '../../functions/getExpenses'

    export default {
        props: { month: Number, year: String },
        setup(props){
            const { getMonthExpenses } = getExpenses();
            const canvas = ref(null)
            const year = parseInt('20' + props.year)
            const data = getMonthExpenses(props.month, year);
            let categoryData = []

            // gets list of categories in month
            data.forEach(el => {
                if (!categoryData.includes(el.category)) {
                    categoryData.push(el.category)
                }
            })
            let dataVals = []
            categoryData.forEach(() => dataVals.push(0));
            console.log(dataVals)
            // gets total value of each category
            data.forEach(el => {
                let index = categoryData.indexOf(el.category)
                let value = dataVals[index] + parseInt(el.price)
                dataVals.splice(index, 1, value)
            })
            
            const chartData = {
                    type: 'doughnut',
                    data: {
                        labels: categoryData,
                        datasets: [{
                            // change to get data from props
                            // label: '# of Votes',
                            data: dataVals,
                            backgroundColor: [
                                '#FB7477',
                                '#F7A578',
                                '#FABE75',
                                '#FAD275',
                                '#B4D39C',
                                '#99D6C4',
                                '#A2CDCC',
                                '#8CC9E3',
                                '#C2A9C6'
                            ],
                            // borderColor: [],
                            // hoverBackgroundColor: ['gray'],
                            hoverBorderWidth: 0,
                            // hoverBorderColor: ['$salmon'], cannot use scss vars
                            borderWidth: 0
                        }]
                    },
                    options: {
                        responsive: true,
                        // circumference: 2 * Math.PI,
                        cutoutPercentage: 50,
                        animation: {
                            animateRotate: true,
                            animateScale: false
                        }
                    }
                }

            onMounted(() => {
                const ctx = canvas.value.getContext('2d');
                new Chart(ctx, chartData)
            })
            return { canvas }
        }
    }
</script>

<style lang="scss" scoped>
div {
    width: 60vw;
    margin-bottom: 2em;
}

@media screen and (max-width: 768px) {
    div {
        width: 100vw;
    }
}
</style>