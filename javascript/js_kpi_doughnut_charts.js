function updateDoughnut(){
var ctx = document.getElementById("kpiDoughnutAccPlant");
var done = document.getElementById("doneInput");
var undone = 100 - done.value;
var chartColors = {
  color1: 'rgba(521, 24, 107, 1)',
  color2: 'rgba(255, 159, 64, 0.2)'
}
var kpiDoughnutAccPlant = new Chart(ctx, {
  type: 'doughnut',
  data: data = {
    datasets: [{
      data: [done.value, undone],
      backgroundColor: [
      ],
    }],
    
    labels: [
      'Progress',
      'Remaining',
      ]
  },
  options: {
    cutoutPercentage: [65],
  }
});
var colorChangeValue = 50;
var dataset = kpiDoughnutAccPlant.data.datasets[0];
  if (dataset.data[1] < 30) {
    dataset.backgroundColor[1] = chartColors.color2
    dataset.backgroundColor[2] = chartColors.color1
  }
  else {
    dataset.backgroundColor[1] = chartColors.color2;
  }
kpiDoughnutAccPlant.update();
}