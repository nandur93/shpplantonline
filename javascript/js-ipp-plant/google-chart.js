// Load the Visualization API and the piechart package.
google.charts.load('current', {
  'packages': ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var jsonData = $.ajax({
    url: "/shpplantonline/php/php-ipp-plant/ipp_monthly.php",
    dataType: "json",
    async: false
  }).responseText;

  // Create our data table out of JSON data loaded from server.
  var data = new google.visualization.DataTable(jsonData);

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div-xx'));
  chart.draw(data, {
    width: 400,
    height: 400
  });
}