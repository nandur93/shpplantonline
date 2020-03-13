function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        if (callback) callback(data);
      }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
}

// this requests the file and executes a callback with the parsed result once
//   it is available
fetchJSONFile('/shpplantonline/php/php-ipp-plant/ipp_monthly.php', function (data) {
  // do something with your data
  console.log(data);

  var dataKpi1 = 0;
  var dataKpi2 = 0;
  var dataKpi3 = 0;
  var dataKpi4 = 0;
  var dataKpi5 = 0;
  var colorRed = 'rgba(255, 0, 0, 0.5)';
  var colorYellow = 'rgba(255, 255, 0, 0.5)';
  var colorLime = 'rgba(0, 255, 0, 0.5)';
  var colorGreen = 'rgba(0, 100, 0, 0.5)';
  var colorBlue = 'rgba(0, 0, 255, 0.5)';
  var colorGrey = 'rgba(128, 128, 128, 0.5)';
  var dataColor1 = colorGrey;
  var dataColor2 = colorGrey;
  var dataColor3 = colorGrey;
  var dataColor4 = colorGrey;
  var dataColor5 = colorGrey;
  var kpiTitle = 'Title KPI';
  var kpiLabel = 'Grade KPI';
  var kpiGrade = 'Skala KPI';
  var kpiLabel1 = 'Label1';
  var kpiLabel2 = 'Label2';
  var kpiLabel3 = 'Label3';
  var kpiLabel4 = 'Label4';
  var kpiLabel5 = 'Label5';
  var ctx = document.getElementById('myChart').getContext('2d');
  var kpiData = {
    // labels: [kpiLabel1, kpiLabel2, kpiLabel3, kpiLabel4, kpiLabel5],
    datasets: [{
      label: kpiLabel,
      backgroundColor: [
        colorRed,
        colorYellow,
        colorGreen,
        colorLime,
        colorBlue
      ],
      yAxesID: 'y-axis-0',
      data: [dataKpi1, dataKpi2, dataKpi3, dataKpi4, dataKpi5]
    }]
  };
  var xAxesOptions = [{
    id: 'y-axis-0',
    display: true,
    type: 'linear',
    position: 'left',
    scaleLabel: {
      display: true,
      labelString: kpiGrade
    },
    ticks: {
      beginAtZero: true,
      max: 5,
      precision: 0
    }
  }];
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: kpiData,
    options: {
      title: {
        display: true,
        text: kpiTitle
      },
      tooltips: {
        mode: 'index',
        intersect: false
      },
      responsive: true,
      scales: {
        yAxes: xAxesOptions
      }
    }
  });

  function switchCase() {
    switch (dataKpi1) {
      case '1':
        dataColor1 = colorRed
        break;
      case '2':
        dataColor1 = colorYellow
        break;
      case '3':
        dataColor1 = colorLime
        break;
      case '4':
        dataColor1 = colorGreen
        break;
      case '5':
        dataColor1 = colorBlue
        break;
      default:
        dataColor1 = colorGrey
    }
    switch (dataKpi2) {
      case '1':
        dataColor2 = colorRed
        break;
      case '2':
        dataColor2 = colorYellow
        break;
      case '3':
        dataColor2 = colorLime
        break;
      case '4':
        dataColor2 = colorGreen
        break;
      case '5':
        dataColor2 = colorBlue
        break;
      default:
        dataColor2 = colorGrey
    }
    switch (dataKpi3) {
      case '1':
        dataColor3 = colorRed
        break;
      case '2':
        dataColor3 = colorYellow
        break;
      case '3':
        dataColor3 = colorLime
        break;
      case '4':
        dataColor3 = colorGreen
        break;
      case '5':
        dataColor3 = colorBlue
        break;
      default:
        dataColor3 = colorGrey
    }
    switch (dataKpi4) {
      case '1':
        dataColor4 = colorRed
        break;
      case '2':
        dataColor4 = colorYellow
        break;
      case '3':
        dataColor4 = colorLime
        break;
      case '4':
        dataColor4 = colorGreen
        break;
      case '5':
        dataColor4 = colorBlue
        break;
      default:
        dataColor4 = colorGrey
    }
    switch (dataKpi5) {
      case '1':
        dataColor5 = colorRed
        break;
      case '2':
        dataColor5 = colorYellow
        break;
      case '3':
        dataColor5 = colorLime
        break;
      case '4':
        dataColor5 = colorGreen
        break;
      case '5':
        dataColor5 = colorBlue
        break;
      default:
        dataColor5 = colorGrey
    }

  }
  //console.log(myChart.data.labels[0]);
  // Username input
  $('#uname')
    .dropdown({
      clearable: true,
      onChange: function (_val) {
        var sname = $('#uname').find(":selected").text();
        if (sname == 'BGW') { // BGW
          $('#fname').val('Bernadus Gunawan Widada')
          $('#nik').val('950500003')
          $('#department').val('Plant Head')
          $('#pic_name').text(data[0].pic) //bgw
          $('#avatar').attr('src', '../../assets/images/VERDIANA ZNB - 15111608.JPG');
          kpiLabel1 = data[0].detail
          kpiLabel2 = data[1].detail
          kpiLabel3 = data[2].detail
          kpiLabel4 = data[3].detail
          kpiLabel5 = data[4].detail
          dataKpi1 = data[0].jan
          dataKpi2 = data[1].jan
          dataKpi3 = data[2].jan
          dataKpi4 = data[3].jan
          dataKpi5 = data[4].jan
          switchCase()
          kpiTitle = 'KPI Plant Head'
        } else if (sname == 'SDR') {
          $('#fname').val('Susilo Dwi Raharjo')
          $('#nik').val('150900245')
          $('#department').val('HRGA')
          $('#pic_name').text(data[15].pic)
          kpiLabel1 = data[15].detail
          kpiLabel2 = data[16].detail
          kpiLabel3 = data[17].detail
          kpiLabel4 = data[18].detail
          kpiLabel5 = data[19].detail
          dataKpi1 = data[15].jan
          dataKpi2 = data[16].jan
          dataKpi3 = data[17].jan
          dataKpi4 = data[18].jan
          dataKpi5 = data[19].jan
          switchCase()
          kpiTitle = 'KPI HRGA'
        } else if (sname == 'CAM') {
          $('#fname').val('Cahyo Agung Martanto')
          $('#nik').val('060800019')
          $('#department').val('EM')
          $('#pic_name').text(data[30].pic)
          $('#avatar').attr('src', '../../assets/images/CAHYO AGUNG MARTANTO - 060800019.jpg');
          kpiLabel1 = data[30].detail
          kpiLabel2 = data[31].detail
          kpiLabel3 = data[32].detail
          kpiLabel4 = data[33].detail
          kpiLabel5 = data[34].detail
          dataKpi1 = data[30].jan
          dataKpi2 = data[31].jan
          dataKpi3 = data[32].jan
          dataKpi4 = data[33].jan
          dataKpi5 = data[34].jan
          switchCase()
          kpiTitle = 'KPI EM'
        } else if (sname == 'FRC') {
          $('#fname').val('Factur Rachman')
          $('#nik').val('170200083')
          $('#department').val('QA')
          $('#pic_name').text(data[45].pic)
          kpiLabel1 = data[45].detail
          kpiLabel2 = data[46].detail
          kpiLabel3 = data[47].detail
          kpiLabel4 = data[48].detail
          kpiLabel5 = data[49].detail
          dataKpi1 = data[45].jan
          dataKpi2 = data[46].jan
          dataKpi3 = data[47].jan
          dataKpi4 = data[48].jan
          dataKpi5 = data[49].jan
          switchCase()
          kpiTitle = 'KPI QA'
        } else if (sname == 'FFA') {
          $('#fname').val('Fazar Fauzan')
          $('#nik').val('060800021')
          $('#department').val('Produksi')
          $('#pic_name').text(data[60].pic)
          kpiLabel1 = data[60].detail
          kpiLabel2 = data[61].detail
          kpiLabel3 = data[62].detail
          kpiLabel4 = data[63].detail
          kpiLabel5 = data[64].detail
          dataKpi1 = data[60].jan
          dataKpi2 = data[61].jan
          dataKpi3 = data[62].jan
          dataKpi4 = data[63].jan
          dataKpi5 = data[64].jan
          switchCase()
          kpiTitle = 'KPI PRODUKSI'
        } else if (sname == 'VZA') {
          $('#fname').val('Verdiana ZNB')
          $('#nik').val('151100330')
          $('#department').val('MS Plant')
          $('#pic_name').text(data[75].pic)
          $('#avatar').attr('src', '../../assets/images/VERDIANA ZNB - 15111608.JPG');
          kpiLabel1 = data[75].detail
          kpiLabel2 = data[76].detail
          kpiLabel3 = data[77].detail
          kpiLabel4 = data[78].detail
          kpiLabel5 = data[79].detail
          dataKpi1 = data[75].jan
          dataKpi2 = data[76].jan
          dataKpi3 = data[77].jan
          dataKpi4 = data[78].jan
          dataKpi5 = data[79].jan
          switchCase()
          kpiTitle = 'KPI MS PLANT'
        } else if (sname == 'DAP') {
          $('#fname').val('Dyanza Aria Perdana')
          $('#nik').val('161200728')
          $('#department').val('PPC')
          $('#pic_name').text(data[90].pic)
          kpiLabel1 = data[90].detail
          kpiLabel2 = data[91].detail
          kpiLabel3 = data[92].detail
          kpiLabel4 = data[93].detail
          kpiLabel5 = data[94].detail
          dataKpi1 = data[90].jan
          dataKpi2 = data[91].jan
          dataKpi3 = data[92].jan
          dataKpi4 = data[93].jan
          dataKpi5 = data[94].jan
          switchCase()
          kpiTitle = 'KPI PPC'
        } else {
          $('#fname').val('')
          $('#nik').val('')
          $('#department').val('')
          $('#pic_name').text(data[0].pic)
        }
        //console.log(dataColor1);
        myChart.data.datasets[0].backgroundColor[0] = dataColor1
        myChart.data.datasets[0].backgroundColor[1] = dataColor2
        myChart.data.datasets[0].backgroundColor[2] = dataColor3
        myChart.data.datasets[0].backgroundColor[3] = dataColor4
        myChart.data.datasets[0].backgroundColor[4] = dataColor5
        myChart.options.title.text = kpiTitle;
        //myChart.data.labels = [kpiLabel1, kpiLabel2, kpiLabel3, kpiLabel4, kpiLabel5];
        myChart.data.datasets[0].data = [dataKpi1, dataKpi2, dataKpi3, dataKpi4, dataKpi5];
        myChart.update();
      }
    });

});