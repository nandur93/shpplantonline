var targetScore1 = 90;
var targetScore2 = 95;
var targetScore3 = 100;
var targetScore4 = 105;
var targetScore5 = 110;
var finalScore

function chartJS(finalScore) {
  var tpmData = {
    labels: ["Final", "Target"],
    datasets: [{
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(108, 122, 137, 0)'
      ],
      data: [finalScore, targetScore5 - finalScore]
    }]
  };
  var ctx = $("#ipp_tpm_imp-vza");

  var halfDoughnut = new Chart(ctx, {
    "type": "doughnut",
    "data": tpmData,
    "options": {
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI
    },
    "animation": {
      animateScale: false,
      animateRotate: false
    }
  });
};

function waitForMessage() {
  $.ajax({
    url: "/shpplantonline/php/php-ipp-plant/vza.php",
    method: "GET",
    async: true,
    /* If set to non-async, browser shows page as "Loading.."*/
    cache: false,
    timeout: 50000,
    /* Timeout in ms */
    success: function (data) {
      var stringScore = JSON.stringify(data);
      var parseScore = JSON.parse(stringScore);
      var finalScore = parseScore[0].kpi_tpm_imp;
      chartJS(finalScore);

    },
    error: function (data) {
      console.log(data);
    },
  });
};
$(document).ready(function passData() {
  waitForMessage();
  chartJS();
});
//setInterval(waitForMessage, 10000);