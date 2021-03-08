<template>
    <div>
        <canvas id="chart" ref="canvas"></canvas>
        {{month}} {{year}}
    </div>
</template>

<script>
import Chart from 'chart.js'
import { onMounted, ref, watch } from 'vue'

    export default {
        props: { values: Array, categories: Array },
        setup(props){
            const canvas = ref(null)
            const chart = ref(null);

            function updateChart(){
                chart.value = ''
                const ctx = canvas.value.getContext('2d')
        
                if (!props.categories || !props.values) {
                    return chart.value = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Nothing To Show'],
                        datasets: [{
                            data: [1],
                            backgroundColor: ['9ca3a9'],
                            hoverBorderWidth: 0,
                            borderWidth: 0
                        }]
                    },
                    options: {
                        responsive: true,
                        circumference: 2*Math.PI,
                    }
                })
                }

                const vals = props.values
                const cats = props.categories
                
                const object = {
                    type: 'doughnut',
                    data: {
                        labels: cats,
                        datasets: [{
                            data: vals,
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
                            hoverBorderWidth: 0,
                            borderWidth: 0
                        }]
                    },
                    options: {
                        responsive: true,
                    }
                }
                chart.value = new Chart(ctx, object)
            }

            watch(props,() => {
                updateChart()
            })

            onMounted(() => {
                updateChart()
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