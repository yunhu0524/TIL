<template>
  <canvas ref="lineChart" id="lineChart" width="300" height="400"></canvas>
</template>

<script>

export default {
 mounted() {
      //const ctx = document.getElementById('lineChart');
      //const ctx = this.$refs.lineChart;
const myChart = new this.$_Chart(this.$refs.lineChart, {
    type: 'line',
    data: {
        labels: ['January',
  'February',
  'March',
  'April',
  'May',
  'June',],
        datasets: [{
            label: 'My First dataset',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: [
                'rgb(255, 99, 132)',
            ],
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });
  }
}
</script>

<style>

</style>