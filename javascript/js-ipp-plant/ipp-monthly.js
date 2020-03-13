var id = [];
var thm = [];
var dtl = [];
var dlv = [];
var grd = [];
var skl = [];
var ach = [];
var pic = [];
var jan = [];
var feb = [];
var mar = [];
var apr = [];
var may = [];
var jun = [];
var jul = [];
var aug = [];
var sep = [];
var oct = [];
var nov = [];
var dec = [];
var dataKpi1 = 3;
var dataKpi2 = 3;
var dataKpi3 = 4;
var dataKpi4 = 4;
var dataKpi5 = 5;
var colorRed = 'rgba(240, 52, 52, 0.5)';
var colorYellow = 'rgba(245, 229, 27, 0.5)';
var colorLime = 'rgba(46, 204, 113, 0.5)';
var colorGreen = 'rgba(1, 152, 117, 0.5)';
var colorBlue = 'rgba(83, 51, 237, 0.5)';
var kpiTitle = 'Title';
var kpiLabel1 = 'Label1';
var kpiLabel2 = 'Label2';
var kpiLabel3 = 'Label3';
var kpiLabel4 = 'Label4';
var kpiLabel5 = 'Label5';

function drawBarChart() {
  var kpiData = {
    labels: [kpiLabel1, kpiLabel2, kpiLabel3, kpiLabel4, kpiLabel5],
    datasets: [{
      label: kpiTitle,
      backgroundColor: [colorBlue, colorGreen, colorLime, colorYellow, colorRed],
      borderColor: 'rgba(77, 19, 209, 1)',
      hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
      hoverBorderColor: 'rgba(200, 200, 200, 1)',
      data: [dataKpi1, dataKpi2, dataKpi3, dataKpi4, dataKpi5]
    }]
  };
  var ctx = $('#chart_div')
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: kpiData,
  });
}

function getData() {
  $.ajax({
    url: "/shpplantonline/php/php-ipp-plant/ipp_monthly.php",
    method: "GET",
    async: true,
    /* If set to non-async, browser shows page as "Loading.."*/
    cache: false,
    timeout: 50000,
    /* Timeout in ms */
    success: function (data) {
      for (var i in data) {
        id.push(data[i].id);
        thm.push(data[i].tema);
        dtl.push(data[i].detail);
        dlv.push(data[i].deliveriable);
        grd.push(data[i].grade);
        skl.push(data[i].skala);
        ach.push(data[i].achieve_2019);
        pic.push(data[i].pic);
        jan.push(data[i].jan);
        feb.push(data[i].feb);
        mar.push(data[i].mar);
        apr.push(data[i].apr);
        may.push(data[i].may);
        jun.push(data[i].jun);
        jul.push(data[i].jul);
        aug.push(data[i].aug);
        sep.push(data[i].sep);
        oct.push(data[i].oct);
        nov.push(data[i].nov);
        dec.push(data[i].des);
      }
      console.log(data);
      $('#pic_name').text(data[77].pic);
      // Username input
      $('#uname')
        .dropdown({
          clearable: true,
          onChange: function (_val) {
            console.log('onChange')
            var sname = $('#uname').find(":selected").text();
            if (sname == 'BGW') { // BGW
              $('#fname').val('Bernadus Gunawan Widada')
              $('#nik').val('950500003')
              $('#department').val('Plant Head')
              $('#pic_name').text(data[2].pic) //bgw
              kpiTitle = data[7].detail
              kpiLabel1 = data[5].detail
            } else if (sname == 'SDR') {
              $('#fname').val('Susilo Dwi Raharjo')
              $('#nik').val('150900245')
              $('#department').val('HRGA')
              $('#pic_name').text(data[17].pic)
              kpiTitle = data[6].detail
              kpiLabel1 = data[8].detail
            } else if (sname == 'CAM') {
              $('#fname').val('Cahyo Agung Martanto')
              $('#nik').val('060800019')
              $('#department').val('EM')
              $('#pic_name').text(data[31].pic)
              kpiTitle = data[8].detail
            } else if (sname == 'FRC') {
              $('#fname').val('Factur Rachman')
              $('#nik').val('170200083')
              $('#department').val('QA')
              $('#pic_name').text(data[47].pic)
            } else if (sname == 'FFA') {
              $('#fname').val('Fazar Fauzan')
              $('#nik').val('060800021')
              $('#department').val('Produksi')
              $('#pic_name').text(data[62].pic)
            } else if (sname == 'VZA') {
              $('#fname').val('Verdiana ZNB')
              $('#nik').val('151100330')
              $('#department').val('MS Plant')
              $('#pic_name').text(data[77].pic)
            } else if (sname == 'DAP') {
              $('#fname').val('Dyanza Aria Perdana')
              $('#nik').val('161200728')
              $('#department').val('PPC')
              $('#pic_name').text(data[92].pic)
            } else {
              $('#fname').val('')
              $('#nik').val('')
              $('#department').val('')
              $('#pic_name').text(data[0].pic)
            }
            drawBarChart([kpiTitle, kpiLabel1]);
            console.log([kpiTitle, kpiLabel1]);
          }
        });
      // End of success
    },
    error: function (data) {
      console.log(data);
    }
  });
}
$(document).ready(
  function () {
    getData();
    drawBarChart();
  });