$(document).ready(
  function () {
    var id = [];
    var date = [];
    var name = [];
    var dev_cost = [];
    var gen_com = [];
    var poe_shp = [];
    var rfid_ams = [];
    var tpm_imp = [];
    var qcc = [];
    var com_center = [];
    var dep_cost = [];
    var oee = [];
    var paperless = [];
    var prep = [];
    var budget = [];
    var score = [];
    var tpm_imp = [];
    var world = [];
    $.ajax({
      url: "/shpplantonline/php/php-ipp-plant/vza.php",
      method: "GET",
      success: function (data) {
        for (var i in data) {
          id.push(data[i].ipp_id);
          date.push(data[i].ipp_month);
          name.push(data[i].ipp_person_name);
          dev_cost.push(data[i].kpi_dev_cost);
          gen_com.push(data[i].kpi_gen_com);
          poe_shp.push(data[i].kpi_poe_shp);
          rfid_ams.push(data[i].kpi_rfid_ams);
          tpm_imp.push(data[i].kpi_tpm_imp);
          qcc.push(data[i].mar_att_ss_qcc);
          com_center.push(data[i].mar_com_center);
          dep_cost.push(data[i].mar_dept_cost);
          oee.push(data[i].mar_oee_plant);
          paperless.push(data[i].mar_paperless);
          prep.push(data[i].mar_preparation);
          budget.push(data[i].mar_reg_budget);
          score.push(data[i].mar_score_cross);
          tpm_imp.push(data[i].mar_tpm_imp);
          world.push(data[i].mar_world_class);
        }
        $('#vza_name_tpm_imp').text(name);
        $('#right_date_tpm_imp').text(date);

        $('#vza_name_gen_com').text(name);
        $('#right_date_gen_com').text(date);

        $('#vza_name_poe').text(name);
        $('#right_date_poe').text(date);

        // Gauge chart
        google.charts.load('current', {
          'packages': ['gauge']
        });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {

          var data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['POE', Math.trunc(poe_shp)]
          ]);

          var options = {
            width: 200,
            height: 200,
            minorTicks: 5
          };

          var chart = new google.visualization.Gauge(document.querySelector('#chart_div_gauge-vza'));

          chart.draw(data, options);
        };
      },
      error: function (data) {
        console.log(data);
      }
    });
  });