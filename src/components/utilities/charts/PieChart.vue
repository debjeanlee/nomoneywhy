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

            onMounted(() => {
                const ctx = canvas.value.getContext('2d');
                new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [{
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            // borderColor: [],
                            // hoverBackgroundColor: ['gray'],
                            hoverBorderWidth: 4,
                            // hoverBorderColor: ['$salmon'], cannot use scss vars
                            borderWidth: 0
                        }]
                    },
                    options: {
                        responsive: true,
                        circumference: 2 * Math.PI,
                        cutoutPercentage: 50,
                        animation: {
                            animateRotate: true,
                            animateScale: false
                        }
                    }
                })
                // console.log(PieChart)
                console.log(canvas.value)
                console.log(ctx)
            })
            return { canvas }
        }
    }
</script>

<style lang="scss">

</style>