<template>
    <div>
        <canvas id="chart" ref="canvas"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js'
import { onMounted, ref } from 'vue'

    export default {
        setup(){
            const canvas = ref(null)
            const categoryData = JSON.parse(localStorage.categories)

            onMounted(() => {
                const ctx = canvas.value.getContext('2d');
                new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: categoryData,
                        datasets: [{
                            // change to get data from props
                            // label: '# of Votes',
                            data: [12, 19, 3, 7, 9, 37, 10, 6, 2],
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
                })
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