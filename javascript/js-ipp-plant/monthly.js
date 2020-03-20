  function start() {
    // JSON fetcer
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
    // it is available
    fetchJSONFile('/shpplantonline/php/php-ipp-plant/ipp_monthly.php', function (data) {
      // do something with your data
      console.log(data);

      // Global variable

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
      var kpiColor1 = colorGrey;
      var kpiColor2 = colorGrey;
      var kpiColor3 = colorGrey;
      var kpiColor4 = colorGrey;
      var kpiColor5 = colorGrey;
      var marColor1 = colorGrey;
      var marColor2 = colorGrey;
      var marColor3 = colorGrey;
      var marColor4 = colorGrey;
      var marColor5 = colorGrey;
      var marColor6 = colorGrey;
      var marColor7 = colorGrey;
      var marColor8 = colorGrey;
      var marColor9 = colorGrey;
      var marColor10 = colorGrey;
      var kpiTitle = 'Title KPI';
      var kpiLabel = 'Grade KPI';
      var kpiGrade = 'Skala KPI';
      var kpiDetail = 'Detail KPI'
      var kpiLabel1 = 'Label1';
      var kpiLabel2 = 'Label2';
      var kpiLabel3 = 'Label3';
      var kpiLabel4 = 'Label4';
      var kpiLabel5 = 'Label5';

      var marTitle = 'Mar Plant'
      var marLabel = 'Grade MAR'
      var marLabel1 = 'Label1'
      var marLabel2 = 'Label2'
      var marLabel3 = 'Label3'
      var marLabel4 = 'Label4'
      var marLabel5 = 'Label5'
      var marLabel6 = 'Label6'
      var marLabel7 = 'Label7'
      var marLabel8 = 'Label8'
      var marLabel9 = 'Label9'
      var marLabel10 = 'Label10'
      var marData1 = 0
      var marData2 = 0
      var marData3 = 0
      var marData4 = 0
      var marData5 = 0
      var marData6 = 0
      var marData7 = 0
      var marData8 = 0
      var marData9 = 0
      var marData10 = 0

      // ChartJS plugins
      // Name in midle doughnut chart
      Chart.pluginService.register({
        beforeDraw: function (chart) {
          if (chart.config.options.elements.center) {
            //Get ctx from string
            var ctx = chart.chart.ctx;

            //Get options from the center object in options
            var centerConfig = chart.config.options.elements.center;
            var fontStyle = centerConfig.fontStyle || 'Arial';
            var txt = centerConfig.text;
            var color = centerConfig.color || '#000';
            var sidePadding = centerConfig.sidePadding || 20;
            var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
            //Start with a base font of 30px
            ctx.font = "30px " + fontStyle;

            //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            var stringWidth = ctx.measureText(txt).width;
            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

            // Find out how much the font can grow in width.
            var widthRatio = elementWidth / stringWidth;
            var newFontSize = Math.floor(30 * widthRatio);
            var elementHeight = (chart.innerRadius * 2);

            // Pick a new font size so it will not be larger than the height of label.
            var fontSizeToUse = Math.min(newFontSize, elementHeight);

            //Set font settings to draw it correctly.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            ctx.font = fontSizeToUse + "px " + fontStyle;
            ctx.fillStyle = color;

            //Draw text in center
            ctx.fillText(txt, centerX, centerY);
          }
        }
      });

      // ChartJS configurations
      var kpiData = {
        labels: [kpiLabel1, kpiLabel2, kpiLabel3, kpiLabel4, kpiLabel5],
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
        ticks: {
          autoSkip: false,
          // maxRotation: 90,
          // minRotation: 90,
          beginAtZero: true,
          max: 5,
          precision: 0,
          callback: function (value) {
            if (value.length > 5) {
              return value.substr(0, 5) + '...'; //truncate
            } else {
              return value
            }
          }
        },
        scaleLabel: {
          display: true,
          labelString: kpiDetail
        }
      }];

      var yAxesOptions = [{
        id: 'y-axis-0',
        display: true,
        type: 'linear',
        position: 'left',
        ticks: {
          beginAtZero: true,
          max: 5,
          precision: 0
        },
        scaleLabel: {
          display: true,
          labelString: kpiGrade
        }
      }];

      var kpiOptions = {
        title: {
          display: true,
          text: kpiTitle
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        responsive: true,
        legend: {

          display: false,
          position: 'left',
        },
        scales: {
          yAxes: yAxesOptions,
          xAxes: xAxesOptions
        },
        plugins: {
          labels: [{
            render: 'value',
            position: 'outside'
          }]
        }
      };

      var marData = {
        labels: [marLabel1, marLabel2, marLabel3, marLabel4, marLabel5, marLabel6, marLabel7, marLabel8, marLabel9, marLabel10],
        datasets: [{
          label: marLabel,
          backgroundColor: [
            colorRed,
            colorYellow,
            colorGreen,
            colorLime,
            colorBlue
          ],
          //yAxesID: 'y-axis-0',
          data: [marData1, marData2, marData3, marData4, marData5, marData6, marData7, marData8, marData9, marData10]
        }]
      };

      var marOptions = {
        title: {
          display: true,
          text: marTitle
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        responsive: true,
        legend: {

          display: false,
          position: 'left',
        },
        scales: {
          //yAxes: yAxesOptions,
          xAxes: xAxesOptions
        }
      };

      var config = {
        type: 'doughnut',
        data: {
          labels: [],
          datasets: [{
            data: [marData1, marData2, marData3],
            backgroundColor: [],
            hoverBackgroundColor: [
              colorGrey, colorGrey, colorGrey, colorGrey, colorGrey, colorGrey, colorGrey, colorGrey, colorGrey, colorGrey
            ]
          }]
        },
        options: {
          elements: {
            center: {
              text: marTitle,
              color: '#FF6384', // Default is #000000
              fontStyle: 'Arial', // Default is Arial
              sidePadding: 20 // Defualt is 20 (as a percentage)
            }
          },
          legend: {
            display: true,
            position: 'bottom'
          },
          plugins: {
            labels: [{
              render: 'value',
              position: 'inside'
            }]
          },
          legendCallback: function (value) {
            if (value.length > 5) {
              return value.substr(0, 5) + '...'; //truncate
            } else {
              return value
            }
          }
        }
      };

      //line
      var lineConfig = {
        type: 'line',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label: data[1].detail,
            data: [],
            borderColor: 'rgba(167, 21, 78,1.0)',
            backgroundColor: 'rgba(167, 21, 78,0.25)',
            fill: true,
          }, {
            label: data[2].detail,
            data: [],
            borderColor: 'rgba(114, 29, 151,1.0)',
            backgroundColor: 'rgba(114, 29, 151,0.25)',
            fill: true
          }, {
            label: data[3].detail,
            data: [],
            borderColor: 'rgba(2, 131, 201,1.0)',
            backgroundColor: 'rgba(2, 131, 201,0.25)',
            fill: true
          }, {
            label: data[4].detail,
            data: [],
            borderColor: 'rgba(0, 151, 167,1.0)',
            backgroundColor: 'rgba(0, 151, 167,0.25)',
            fill: true
          }, {
            label: data[5].detail,
            data: [],
            borderColor: 'rgba(170, 55, 19,1.0)',
            backgroundColor: 'rgba(170, 55, 19,0.25)',
            fill: true
          }]
        },
        options: {
          scales: {
            yAxes: [{
              stacked: false,
              ticks: {
                beginAtZero: true,
                max: 10,
                precision: 0
              }
            }]
          },
          responsive: true,
          title: {
            display: true,
            position: "top",
            text: "KPI Graph",
            fontSize: 18,
            fontColor: "#111"
          },
          legend: {
            display: true,
            position: "bottom",
            labels: {
              fontColor: "#333",
              fontSize: 16
            }
          },
          plugins: {
            labels: [{
              render: 'value',
              position: 'outside'
            }]
          }
        }
      };

      //line
      var marConfigGraph = {
        type: 'line',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label: data[6].detail,
            data: [],
            backgroundColor: 'rgba(58, 75, 84,0.15)',
            borderColor: 'rgba(58, 75, 84,1.0)',
            fill: true,
          }, {
            label: data[7].detail,
            data: [],
            backgroundColor: 'rgba(169, 17, 69,0.15)',
            borderColor: 'rgba(169, 17, 69,1)',
            fill: true
          }, {
            label: data[8].detail,
            data: [],
            backgroundColor: 'rgba(128, 32, 144,0.15)',
            borderColor: 'rgba(128, 32, 144,1)',
            fill: true
          }, {
            label: data[9].detail,
            data: [],
            backgroundColor: 'rgba(71, 40, 127,0.15)',
            borderColor: 'rgba(71, 40, 127,1)',
            fill: true
          }, {
            label: data[10].detail,
            data: [],
            backgroundColor: 'rgba(42, 55, 122,0.15)',
            borderColor: 'rgba(42, 55, 122,1)',
            fill: true
          }, {
            label: data[11].detail,
            data: [],
            backgroundColor: 'rgba(9, 102, 175,0.15)',
            borderColor: 'rgba(9, 102, 175,1)',
            fill: true
          }, {
            label: data[12].detail,
            data: [],
            backgroundColor: 'rgba(2, 138, 200,0.15)',
            borderColor: 'rgba(2, 138, 200,1)',
            fill: true
          }, {
            label: data[13].detail,
            data: [],
            backgroundColor: 'rgba(48, 110, 50,0.15)',
            borderColor: 'rgba(48, 110, 50,1)',
            fill: true
          }, {
            label: data[14].detail,
            data: [],
            backgroundColor: 'rgba(133, 144, 26,0.15)',
            borderColor: 'rgba(133, 144, 26,1)',
            fill: true
          }, {
            label: data[15].detail,
            data: [],
            backgroundColor: 'rgba(204, 122, 0,0.15)',
            borderColor: 'rgba(204, 122, 0,1)',
            fill: true
          }]
        },
        options: {
          scales: {
            yAxes: [{
              stacked: false,
              ticks: {
                beginAtZero: true,
                max: 5,
                precision: 0
              }
            }]
          },
          responsive: true,
          title: {
            display: true,
            position: "top",
            text: "MAR Graph",
            fontSize: 18,
            fontColor: "#111"
          },
          legend: {
            display: true,
            position: "bottom",
            labels: {
              fontColor: "#333",
              fontSize: 16
            }
          },
          plugins: {
            labels: [{
              render: 'value',
              position: 'outside'
            }]
          }
        }
      };

      // Draw charts on canvas
      var cty = document.getElementById('kpiChartMonthly').getContext('2d');
      var kpiChartMonthly = new Chart(cty, {
        type: 'bar',
        //type: 'bar',
        data: kpiData,
        options: kpiOptions
      });

      var ctx = document.getElementById("marChartMonthly").getContext("2d");
      var marChartMonthly = new Chart(ctx, config);


      var ctl = document.getElementById("marMonthlyLine").getContext("2d");
      var myLineChart = new Chart(ctl, lineConfig);


      var ctm = document.getElementById('marMonthlyGraph').getContext('2d');
      var marMonthlyGraph = new Chart(ctm, marConfigGraph);

      //var marCtx = document.getElementById('').getContext('2d');
      /*       var marChartMonthly = new Chart(marCtx, {
              type: 'doughnut',
              data: marData,
              options: marOptions
            }); */

      // Pseucode
      // Pilih nama PIC
      // Username input

      var marColors = [marColor1, marColor2, marColor3, marColor4, marColor5, marColor6, marColor7, marColor8, marColor9, marColor10]

      function marDataColor() {
        for (var intMarColor = 0; intMarColor < 10; intMarColor++) {
          switch (marChartMonthly.data.datasets[0].data[intMarColor]) {
            case '1':
              marColors[intMarColor] = colorRed
              break;
            case '2':
              marColors[intMarColor] = colorYellow
              break;
            case '3':
              marColors[intMarColor] = colorLime
              break;
            case '4':
              marColors[intMarColor] = colorGreen
              break;
            case '5':
              marColors[intMarColor] = colorBlue
              break;
            default:
              marColors[intMarColor] = colorGrey
          }
        }
      }

      var kpiColors = [kpiColor1, kpiColor2, kpiColor3, kpiColor4, kpiColor5]

      function kpiDataColor() {
        for (var intKpiColor = 0; intKpiColor < 5; intKpiColor++) {
          switch (kpiChartMonthly.data.datasets[0].data[intKpiColor]) {
            case '1':
              kpiColors[intKpiColor] = colorRed
              break;
            case '2':
              kpiColors[intKpiColor] = colorYellow
              break;
            case '3':
              kpiColors[intKpiColor] = colorLime
              break;
            case '4':
              kpiColors[intKpiColor] = colorGreen
              break;
            case '5':
              kpiColors[intKpiColor] = colorBlue
              break;
            default:
              kpiColors[intKpiColor] = colorGrey
          }
        }
      }

      $('#uname')
        .dropdown({
          clearable: true,
          onChange: function (_val) {
            // clear dropdown bulan ketika dropdown nama diganti
            $('#month').dropdown('clear');
            var sname = $('#uname').find(":selected").text();
            var kpiLabel = []
            var marLabel = []
            if (sname == 'BGW') { // BGW
              $('#fname').val('Bernadus Gunawan Widada')
              $('#nik').text('950500003')
              $('#department').text('Plant Head')
              $('#pic_name').text(data[1].pic)
              $('.floated.image').attr('src', '../../assets/images/BERNADUS GUNAWAN WIDADA - 950500003.jpg');
              marTitle = 'MAR Plant Head'
              kpiTitle = 'KPI Plant Head'
              for (var intLine = 1; intLine < 6; intLine++) {
                //kpiData
                var ytdLine = [data[intLine].jan, data[intLine].feb, data[intLine].mar, data[intLine].apr, data[intLine].may, data[intLine].jun, data[intLine].jul, data[intLine].aug, data[intLine].sep, data[intLine].oct, data[intLine].nov, data[intLine].des]
                myLineChart.data.datasets[intLine - 1].data = ytdLine
                //kpiLabel
                kpiLabel = data[intLine].detail
                myLineChart.data.datasets[intLine - 1].label = kpiLabel
              }
              for (var intMarLine = 6; intMarLine < 16; intMarLine++) {
                //marData
                var ytdLine = [data[intMarLine].jan, data[intMarLine].feb, data[intMarLine].mar, data[intMarLine].apr, data[intMarLine].may, data[intMarLine].jun, data[intMarLine].jul, data[intMarLine].aug, data[intMarLine].sep, data[intMarLine].oct, data[intMarLine].nov, data[intMarLine].des]
                marMonthlyGraph.data.datasets[intMarLine - 6].data = ytdLine
                //marLabel
                marLabel = data[intMarLine].detail
                marMonthlyGraph.data.datasets[intMarLine - 6].label = marLabel
              }
            } else if (sname == 'SDR') {
              $('#fname').val('Susilo Dwi Raharjo')
              $('#nik').text('150900245')
              $('#department').text('HRGA')
              $('#pic_name').text(data[16].pic)
              $('.floated.image').attr('src', '../../assets/images/SUSILO DWI RAHARJO - 15091601.JPG');
              marTitle = 'MAR HRGA'
              kpiTitle = 'KPI HRGA'
              for (var intLine = 16; intLine < 21; intLine++) {
                var ytdLine = [data[intLine].jan, data[intLine].feb, data[intLine].mar, data[intLine].apr, data[intLine].may, data[intLine].jun, data[intLine].jul, data[intLine].aug, data[intLine].sep, data[intLine].oct, data[intLine].nov, data[intLine].des]
                myLineChart.data.datasets[intLine - 16].data = ytdLine
                //kpiLabel
                kpiLabel = data[intLine].detail
                myLineChart.data.datasets[intLine - 16].label = kpiLabel
              }
              for (var intMarLine = 21; intMarLine < 31; intMarLine++) {
                var ytdLine = [data[intLine].jan, data[intLine].feb, data[intLine].mar, data[intLine].apr, data[intLine].may, data[intLine].jun, data[intLine].jul, data[intLine].aug, data[intLine].sep, data[intLine].oct, data[intLine].nov, data[intLine].des]
                marMonthlyGraph.data.datasets[intMarLine - 21].data = ytdLine
                //marLabel
                marLabel = data[intMarLine].detail
                marMonthlyGraph.data.datasets[intMarLine - 21].label = marLabel
              }
            } else if (sname == 'CAM') {
              $('#fname').val('Cahyo Agung Martanto')
              $('#nik').text('060800019')
              $('#department').text('EM')
              $('#pic_name').text(data[31].pic)
              $('.floated.image').attr('src', '../../assets/images/CAHYO AGUNG MARTANTO - 060800019.jpg');
              marTitle = 'MAR EM'
              kpiTitle = 'KPI EM'
              for (var intLine = 31; intLine < 36; intLine++) {
                var ytdLine = [data[intLine].jan, data[intLine].feb, data[intLine].mar, data[intLine].apr, data[intLine].may, data[intLine].jun, data[intLine].jul, data[intLine].aug, data[intLine].sep, data[intLine].oct, data[intLine].nov, data[intLine].des]
                myLineChart.data.datasets[intLine - 31].data = ytdLine
                //kpiLabel
                kpiLabel = data[intLine].detail
                myLineChart.data.datasets[intLine - 31].label = kpiLabel
              }
              for (var intMarLine = 36; intMarLine < 46; intMarLine++) {
                var ytdLine = [data[intLine].jan, data[intLine].feb, data[intLine].mar, data[intLine].apr, data[intLine].may, data[intLine].jun, data[intLine].jul, data[intLine].aug, data[intLine].sep, data[intLine].oct, data[intLine].nov, data[intLine].des]
                marMonthlyGraph.data.datasets[intMarLine - 36].data = ytdLine
                //marLabel
                marLabel = data[intMarLine].detail
                marMonthlyGraph.data.datasets[intMarLine - 36].label = marLabel
              }
            } else if (sname == 'FRC') {
              $('#fname').val('Factur Rachman')
              $('#nik').text('170200083')
              $('#department').text('QA')
              $('#pic_name').text(data[46].pic)
              $('.floated.image').attr('src', '../../assets/images/FATCHUR RACHMAN - 17020101 CROP.jpg');
              marTitle = 'MAR QA'
              kpiTitle = 'KPI QA'
              for (var intLine = 46; intLine < 51; intLine++) {
                var ytdLine = [data[intLine].jan, data[intLine].feb, data[intLine].mar, data[intLine].apr, data[intLine].may, data[intLine].jun, data[intLine].jul, data[intLine].aug, data[intLine].sep, data[intLine].oct, data[intLine].nov, data[intLine].des]
                myLineChart.data.datasets[intLine - 46].data = ytdLine
                //kpiLabel
                kpiLabel = data[intLine].detail
                myLineChart.data.datasets[intLine - 46].label = kpiLabel
              }
              for (var intMarLine = 51; intMarLine < 61; intMarLine++) {
                var ytdLine = [data[intLine].jan, data[intLine].feb, data[intLine].mar, data[intLine].apr, data[intLine].may, data[intLine].jun, data[intLine].jul, data[intLine].aug, data[intLine].sep, data[intLine].oct, data[intLine].nov, data[intLine].des]
                marMonthlyGraph.data.datasets[intMarLine - 51].data = ytdLine
                //marLabel
                marLabel = data[intMarLine].detail
                marMonthlyGraph.data.datasets[intMarLine - 51].label = marLabel
              }
            } else if (sname == 'FFA') {
              $('#fname').val('Fazar Fauzan')
              $('#nik').text('060800021')
              $('#department').text('Produksi')
              $('#pic_name').text(data[61].pic)
              $('.floated.image').attr('src', '../../assets/images/FAJAR FAUZAN - 060800021.JPG');
              marTitle = 'MAR PRODUKSI'
              kpiTitle = 'KPI PRODUKSI'
              for (var intLine = 61; intLine < 66; intLine++) {
                var ytdLine = [data[intLine].jan, data[intLine].feb, data[intLine].mar, data[intLine].apr, data[intLine].may, data[intLine].jun, data[intLine].jul, data[intLine].aug, data[intLine].sep, data[intLine].oct, data[intLine].nov, data[intLine].des]
                myLineChart.data.datasets[intLine - 61].data = ytdLine
                //kpiLabel
                kpiLabel = data[intLine].detail
                myLineChart.data.datasets[intLine - 61].label = kpiLabel
              }
              for (var intMarLine = 66; intMarLine < 76; intMarLine++) {
                var ytdLine = [data[intLine].jan, data[intLine].feb, data[intLine].mar, data[intLine].apr, data[intLine].may, data[intLine].jun, data[intLine].jul, data[intLine].aug, data[intLine].sep, data[intLine].oct, data[intLine].nov, data[intLine].des]
                marMonthlyGraph.data.datasets[intMarLine - 66].data = ytdLine
                //marLabel
                marLabel = data[intMarLine].detail
                marMonthlyGraph.data.datasets[intMarLine - 66].label = marLabel
              }
            } else if (sname == 'VZA') {
              $('#fname').val('Verdiana ZNB')
              $('#nik').text('151100330')
              $('#department').text('MS Plant')
              $('#pic_name').text(data[76].pic)
              $('.floated.image').attr('src', '../../assets/images/VERDIANA ZNB - 15111608.JPG');
              marTitle = 'MAR MS PLANT'
              kpiTitle = 'KPI MS PLANT'
              for (var intLine = 76; intLine < 81; intLine++) {
                var ytdLine = [data[intLine].jan, data[intLine].feb, data[intLine].mar, data[intLine].apr, data[intLine].may, data[intLine].jun, data[intLine].jul, data[intLine].aug, data[intLine].sep, data[intLine].oct, data[intLine].nov, data[intLine].des]
                myLineChart.data.datasets[intLine - 76].data = ytdLine
                //kpiLabel
                kpiLabel = data[intLine].detail
                myLineChart.data.datasets[intLine - 76].label = kpiLabel
              }
              for (var intMarLine = 81; intMarLine < 91; intMarLine++) {
                var ytdLine = [data[intLine].jan, data[intLine].feb, data[intLine].mar, data[intLine].apr, data[intLine].may, data[intLine].jun, data[intLine].jul, data[intLine].aug, data[intLine].sep, data[intLine].oct, data[intLine].nov, data[intLine].des]
                marMonthlyGraph.data.datasets[intMarLine - 81].data = ytdLine
                //marLabel
                marLabel = data[intMarLine].detail
                marMonthlyGraph.data.datasets[intMarLine - 81].label = marLabel
              }
            } else if (sname == 'DAP') {
              $('#fname').val('Dyanza Aria Perdana')
              $('#nik').text('161200728')
              $('#department').text('PPC')
              $('#pic_name').text(data[91].pic)
              $('.floated.image').attr('src', '../../assets/images/DYANZA ARIA PERDANA - 16120700.JPG');
              marTitle = 'MAR PPC'
              kpiTitle = 'KPI PPC'
              for (var intLine = 91; intLine < 96; intLine++) {
                var ytdLine = [data[intLine].jan, data[intLine].feb, data[intLine].mar, data[intLine].apr, data[intLine].may, data[intLine].jun, data[intLine].jul, data[intLine].aug, data[intLine].sep, data[intLine].oct, data[intLine].nov, data[intLine].des]
                myLineChart.data.datasets[intLine - 91].data = ytdLine
                //kpiLabel
                kpiLabel = data[intLine].detail
                myLineChart.data.datasets[intLine - 91].label = kpiLabel
              }
              for (var intMarLine = 96; intMarLine < 106; intMarLine++) {
                var ytdLine = [data[intLine].jan, data[intLine].feb, data[intLine].mar, data[intLine].apr, data[intLine].may, data[intLine].jun, data[intLine].jul, data[intLine].aug, data[intLine].sep, data[intLine].oct, data[intLine].nov, data[intLine].des]
                marMonthlyGraph.data.datasets[intMarLine - 96].data = ytdLine
                //marLabel
                marLabel = data[intMarLine].detail
                marMonthlyGraph.data.datasets[intMarLine - 96].label = marLabel
              }
            } else {
              $('#fname').val('')
              $('#nik').text('')
              $('#department').text('Department')
              $('#pic_name').text(data[0].pic)
              $('.floated.image').attr('src', '../../assets/images/nan.jpg');
            }
            marMonthlyGraph.update()
            myLineChart.update()
          }
        });

      // pilih bulan
      $('#month')
        .dropdown({
          clearable: true,
          onChange: function (_val) {
            var month = $('#month').find(":selected").text();
            var sname = $('#uname').find(":selected").text();
            switch (month) {
              case 'Jan':
                //check for username
                switch (sname) {
                  case 'BGW':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 1; intData < 6; intData++) {
                      kpiDataJan.push(data[intData].jan);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 1; intLabel < 6; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 6; intMarData < 16; intMarData++) {
                      marDataJan.push(data[intMarData].jan);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 6; intMarLabel < 16; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'SDR':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 16; intData < 21; intData++) {
                      kpiDataJan.push(data[intData].jan);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 16; intLabel < 21; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 21; intMarData < 31; intMarData++) {
                      marDataJan.push(data[intMarData].jan);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 21; intMarLabel < 31; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'CAM':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 31; intData < 36; intData++) {
                      kpiDataJan.push(data[intData].jan);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 31; intLabel < 36; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 36; intMarData < 46; intMarData++) {
                      marDataJan.push(data[intMarData].jan);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 36; intMarLabel < 46; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FRC':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 46; intData < 51; intData++) {
                      kpiDataJan.push(data[intData].jan);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 46; intLabel < 51; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 51; intMarData < 61; intMarData++) {
                      marDataJan.push(data[intMarData].jan);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 51; intMarLabel < 61; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FFA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 61; intData < 66; intData++) {
                      kpiDataJan.push(data[intData].jan);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 61; intLabel < 66; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 66; intMarData < 76; intMarData++) {
                      marDataJan.push(data[intMarData].jan);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 66; intMarLabel < 76; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'VZA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 76; intData < 87; intData++) {
                      kpiDataJan.push(data[intData].jan);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 76; intLabel < 81; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 81; intMarData < 91; intMarData++) {
                      marDataJan.push(data[intMarData].jan);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 81; intMarLabel < 91; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'DAP':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 91; intData < 96; intData++) {
                      kpiDataJan.push(data[intData].jan);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 91; intLabel < 96; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 96; intMarData < 106; intMarData++) {
                      marDataJan.push(data[intMarData].jan);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 96; intMarLabel < 106; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  default:
                    //
                    break;
                }
                break;
              case 'Feb':
                //check for username
                switch (sname) {
                  case 'BGW':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 1; intData < 6; intData++) {
                      kpiDataJan.push(data[intData].feb);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 1; intLabel < 6; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 6; intMarData < 16; intMarData++) {
                      marDataJan.push(data[intMarData].feb);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 6; intMarLabel < 16; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'SDR':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 16; intData < 21; intData++) {
                      kpiDataJan.push(data[intData].feb);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 16; intLabel < 21; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 21; intMarData < 31; intMarData++) {
                      marDataJan.push(data[intMarData].feb);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 21; intMarLabel < 31; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'CAM':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 31; intData < 36; intData++) {
                      kpiDataJan.push(data[intData].feb);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 31; intLabel < 36; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 36; intMarData < 46; intMarData++) {
                      marDataJan.push(data[intMarData].feb);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 36; intMarLabel < 46; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FRC':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 46; intData < 51; intData++) {
                      kpiDataJan.push(data[intData].feb);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 46; intLabel < 51; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 51; intMarData < 61; intMarData++) {
                      marDataJan.push(data[intMarData].feb);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 51; intMarLabel < 61; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FFA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 61; intData < 66; intData++) {
                      kpiDataJan.push(data[intData].feb);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 61; intLabel < 66; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 66; intMarData < 76; intMarData++) {
                      marDataJan.push(data[intMarData].feb);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 66; intMarLabel < 76; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'VZA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 76; intData < 87; intData++) {
                      kpiDataJan.push(data[intData].feb);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 76; intLabel < 81; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 81; intMarData < 91; intMarData++) {
                      marDataJan.push(data[intMarData].feb);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 81; intMarLabel < 91; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'DAP':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 91; intData < 96; intData++) {
                      kpiDataJan.push(data[intData].feb);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 91; intLabel < 96; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 96; intMarData < 106; intMarData++) {
                      marDataJan.push(data[intMarData].feb);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 96; intMarLabel < 106; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  default:
                    //
                    break;
                }
                break;
              case 'Mar':
                //check for username
                switch (sname) {
                  case 'BGW':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 1; intData < 6; intData++) {
                      kpiDataJan.push(data[intData].mar);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 1; intLabel < 6; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 6; intMarData < 16; intMarData++) {
                      marDataJan.push(data[intMarData].mar);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 6; intMarLabel < 16; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'SDR':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 16; intData < 21; intData++) {
                      kpiDataJan.push(data[intData].mar);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 16; intLabel < 21; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 21; intMarData < 31; intMarData++) {
                      marDataJan.push(data[intMarData].mar);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 21; intMarLabel < 31; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'CAM':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 31; intData < 36; intData++) {
                      kpiDataJan.push(data[intData].mar);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 31; intLabel < 36; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 36; intMarData < 46; intMarData++) {
                      marDataJan.push(data[intMarData].mar);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 36; intMarLabel < 46; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FRC':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 46; intData < 51; intData++) {
                      kpiDataJan.push(data[intData].mar);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 46; intLabel < 51; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 51; intMarData < 61; intMarData++) {
                      marDataJan.push(data[intMarData].mar);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 51; intMarLabel < 61; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FFA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 61; intData < 66; intData++) {
                      kpiDataJan.push(data[intData].mar);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 61; intLabel < 66; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 66; intMarData < 76; intMarData++) {
                      marDataJan.push(data[intMarData].mar);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 66; intMarLabel < 76; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'VZA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 76; intData < 87; intData++) {
                      kpiDataJan.push(data[intData].mar);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 76; intLabel < 81; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 81; intMarData < 91; intMarData++) {
                      marDataJan.push(data[intMarData].mar);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 81; intMarLabel < 91; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'DAP':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 91; intData < 96; intData++) {
                      kpiDataJan.push(data[intData].mar);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 91; intLabel < 96; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 96; intMarData < 106; intMarData++) {
                      marDataJan.push(data[intMarData].mar);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 96; intMarLabel < 106; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  default:
                    //
                    break;
                }
                break;
              case 'Apr':
                //check for username
                switch (sname) {
                  case 'BGW':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 1; intData < 6; intData++) {
                      kpiDataJan.push(data[intData].apr);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 1; intLabel < 6; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 6; intMarData < 16; intMarData++) {
                      marDataJan.push(data[intMarData].apr);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 6; intMarLabel < 16; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'SDR':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 16; intData < 21; intData++) {
                      kpiDataJan.push(data[intData].apr);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 16; intLabel < 21; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 21; intMarData < 31; intMarData++) {
                      marDataJan.push(data[intMarData].apr);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 21; intMarLabel < 31; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'CAM':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 31; intData < 36; intData++) {
                      kpiDataJan.push(data[intData].apr);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 31; intLabel < 36; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 36; intMarData < 46; intMarData++) {
                      marDataJan.push(data[intMarData].apr);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 36; intMarLabel < 46; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FRC':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 46; intData < 51; intData++) {
                      kpiDataJan.push(data[intData].apr);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 46; intLabel < 51; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 51; intMarData < 61; intMarData++) {
                      marDataJan.push(data[intMarData].apr);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 51; intMarLabel < 61; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FFA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 61; intData < 66; intData++) {
                      kpiDataJan.push(data[intData].apr);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 61; intLabel < 66; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 66; intMarData < 76; intMarData++) {
                      marDataJan.push(data[intMarData].apr);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 66; intMarLabel < 76; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'VZA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 76; intData < 87; intData++) {
                      kpiDataJan.push(data[intData].apr);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 76; intLabel < 81; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 81; intMarData < 91; intMarData++) {
                      marDataJan.push(data[intMarData].apr);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 81; intMarLabel < 91; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'DAP':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 91; intData < 96; intData++) {
                      kpiDataJan.push(data[intData].apr);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 91; intLabel < 96; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 96; intMarData < 106; intMarData++) {
                      marDataJan.push(data[intMarData].apr);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 96; intMarLabel < 106; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  default:
                    //
                    break;
                }
                break;
              case 'May':
                //check for username
                switch (sname) {
                  case 'BGW':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 1; intData < 6; intData++) {
                      kpiDataJan.push(data[intData].may);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 1; intLabel < 6; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 6; intMarData < 16; intMarData++) {
                      marDataJan.push(data[intMarData].may);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 6; intMarLabel < 16; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'SDR':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 16; intData < 21; intData++) {
                      kpiDataJan.push(data[intData].may);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 16; intLabel < 21; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 21; intMarData < 31; intMarData++) {
                      marDataJan.push(data[intMarData].may);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 21; intMarLabel < 31; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'CAM':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 31; intData < 36; intData++) {
                      kpiDataJan.push(data[intData].may);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 31; intLabel < 36; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 36; intMarData < 46; intMarData++) {
                      marDataJan.push(data[intMarData].may);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 36; intMarLabel < 46; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FRC':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 46; intData < 51; intData++) {
                      kpiDataJan.push(data[intData].may);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 46; intLabel < 51; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 51; intMarData < 61; intMarData++) {
                      marDataJan.push(data[intMarData].may);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 51; intMarLabel < 61; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FFA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 61; intData < 66; intData++) {
                      kpiDataJan.push(data[intData].may);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 61; intLabel < 66; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 66; intMarData < 76; intMarData++) {
                      marDataJan.push(data[intMarData].may);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 66; intMarLabel < 76; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'VZA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 76; intData < 87; intData++) {
                      kpiDataJan.push(data[intData].may);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 76; intLabel < 81; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 81; intMarData < 91; intMarData++) {
                      marDataJan.push(data[intMarData].may);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 81; intMarLabel < 91; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'DAP':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 91; intData < 96; intData++) {
                      kpiDataJan.push(data[intData].may);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 91; intLabel < 96; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 96; intMarData < 106; intMarData++) {
                      marDataJan.push(data[intMarData].may);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 96; intMarLabel < 106; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  default:
                    //
                    break;
                }
                break;
              case 'Jun':
                //check for username
                switch (sname) {
                  case 'BGW':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 1; intData < 6; intData++) {
                      kpiDataJan.push(data[intData].jun);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 1; intLabel < 6; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 6; intMarData < 16; intMarData++) {
                      marDataJan.push(data[intMarData].jun);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 6; intMarLabel < 16; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'SDR':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 16; intData < 21; intData++) {
                      kpiDataJan.push(data[intData].jun);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 16; intLabel < 21; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 21; intMarData < 31; intMarData++) {
                      marDataJan.push(data[intMarData].jun);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 21; intMarLabel < 31; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'CAM':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 31; intData < 36; intData++) {
                      kpiDataJan.push(data[intData].jun);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 31; intLabel < 36; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 36; intMarData < 46; intMarData++) {
                      marDataJan.push(data[intMarData].jun);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 36; intMarLabel < 46; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FRC':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 46; intData < 51; intData++) {
                      kpiDataJan.push(data[intData].jun);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 46; intLabel < 51; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 51; intMarData < 61; intMarData++) {
                      marDataJan.push(data[intMarData].jun);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 51; intMarLabel < 61; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FFA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 61; intData < 66; intData++) {
                      kpiDataJan.push(data[intData].jun);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 61; intLabel < 66; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 66; intMarData < 76; intMarData++) {
                      marDataJan.push(data[intMarData].jun);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 66; intMarLabel < 76; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'VZA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 76; intData < 87; intData++) {
                      kpiDataJan.push(data[intData].jun);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 76; intLabel < 81; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 81; intMarData < 91; intMarData++) {
                      marDataJan.push(data[intMarData].jun);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 81; intMarLabel < 91; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'DAP':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 91; intData < 96; intData++) {
                      kpiDataJan.push(data[intData].jun);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 91; intLabel < 96; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 96; intMarData < 106; intMarData++) {
                      marDataJan.push(data[intMarData].jun);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 96; intMarLabel < 106; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  default:
                    //
                    break;
                }
                break;
              case 'Jul':
                //check for username
                switch (sname) {
                  case 'BGW':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 1; intData < 6; intData++) {
                      kpiDataJan.push(data[intData].jul);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 1; intLabel < 6; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 6; intMarData < 16; intMarData++) {
                      marDataJan.push(data[intMarData].jul);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 6; intMarLabel < 16; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'SDR':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 16; intData < 21; intData++) {
                      kpiDataJan.push(data[intData].jul);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 16; intLabel < 21; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 21; intMarData < 31; intMarData++) {
                      marDataJan.push(data[intMarData].jul);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 21; intMarLabel < 31; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'CAM':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 31; intData < 36; intData++) {
                      kpiDataJan.push(data[intData].jul);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 31; intLabel < 36; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 36; intMarData < 46; intMarData++) {
                      marDataJan.push(data[intMarData].jul);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 36; intMarLabel < 46; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FRC':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 46; intData < 51; intData++) {
                      kpiDataJan.push(data[intData].jul);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 46; intLabel < 51; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 51; intMarData < 61; intMarData++) {
                      marDataJan.push(data[intMarData].jul);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 51; intMarLabel < 61; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FFA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 61; intData < 66; intData++) {
                      kpiDataJan.push(data[intData].jul);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 61; intLabel < 66; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 66; intMarData < 76; intMarData++) {
                      marDataJan.push(data[intMarData].jul);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 66; intMarLabel < 76; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'VZA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 76; intData < 87; intData++) {
                      kpiDataJan.push(data[intData].jul);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 76; intLabel < 81; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 81; intMarData < 91; intMarData++) {
                      marDataJan.push(data[intMarData].jul);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 81; intMarLabel < 91; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'DAP':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 91; intData < 96; intData++) {
                      kpiDataJan.push(data[intData].jul);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 91; intLabel < 96; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 96; intMarData < 106; intMarData++) {
                      marDataJan.push(data[intMarData].jul);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 96; intMarLabel < 106; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  default:
                    //
                    break;
                }
                break;
              case 'Aug':
                //check for username
                switch (sname) {
                  case 'BGW':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 1; intData < 6; intData++) {
                      kpiDataJan.push(data[intData].aug);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 1; intLabel < 6; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 6; intMarData < 16; intMarData++) {
                      marDataJan.push(data[intMarData].aug);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 6; intMarLabel < 16; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'SDR':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 16; intData < 21; intData++) {
                      kpiDataJan.push(data[intData].aug);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 16; intLabel < 21; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 21; intMarData < 31; intMarData++) {
                      marDataJan.push(data[intMarData].aug);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 21; intMarLabel < 31; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'CAM':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 31; intData < 36; intData++) {
                      kpiDataJan.push(data[intData].aug);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 31; intLabel < 36; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 36; intMarData < 46; intMarData++) {
                      marDataJan.push(data[intMarData].aug);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 36; intMarLabel < 46; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FRC':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 46; intData < 51; intData++) {
                      kpiDataJan.push(data[intData].aug);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 46; intLabel < 51; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 51; intMarData < 61; intMarData++) {
                      marDataJan.push(data[intMarData].aug);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 51; intMarLabel < 61; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FFA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 61; intData < 66; intData++) {
                      kpiDataJan.push(data[intData].aug);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 61; intLabel < 66; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 66; intMarData < 76; intMarData++) {
                      marDataJan.push(data[intMarData].aug);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 66; intMarLabel < 76; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'VZA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 76; intData < 87; intData++) {
                      kpiDataJan.push(data[intData].aug);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 76; intLabel < 81; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 81; intMarData < 91; intMarData++) {
                      marDataJan.push(data[intMarData].aug);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 81; intMarLabel < 91; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'DAP':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 91; intData < 96; intData++) {
                      kpiDataJan.push(data[intData].aug);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 91; intLabel < 96; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 96; intMarData < 106; intMarData++) {
                      marDataJan.push(data[intMarData].aug);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 96; intMarLabel < 106; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  default:
                    //
                    break;
                }
                break;
              case 'Sep':
                //check for username
                switch (sname) {
                  case 'BGW':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 1; intData < 6; intData++) {
                      kpiDataJan.push(data[intData].sep);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 1; intLabel < 6; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 6; intMarData < 16; intMarData++) {
                      marDataJan.push(data[intMarData].sep);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 6; intMarLabel < 16; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'SDR':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 16; intData < 21; intData++) {
                      kpiDataJan.push(data[intData].sep);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 16; intLabel < 21; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 21; intMarData < 31; intMarData++) {
                      marDataJan.push(data[intMarData].sep);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 21; intMarLabel < 31; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'CAM':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 31; intData < 36; intData++) {
                      kpiDataJan.push(data[intData].sep);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 31; intLabel < 36; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 36; intMarData < 46; intMarData++) {
                      marDataJan.push(data[intMarData].sep);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 36; intMarLabel < 46; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FRC':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 46; intData < 51; intData++) {
                      kpiDataJan.push(data[intData].sep);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 46; intLabel < 51; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 51; intMarData < 61; intMarData++) {
                      marDataJan.push(data[intMarData].sep);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 51; intMarLabel < 61; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FFA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 61; intData < 66; intData++) {
                      kpiDataJan.push(data[intData].sep);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 61; intLabel < 66; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 66; intMarData < 76; intMarData++) {
                      marDataJan.push(data[intMarData].sep);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 66; intMarLabel < 76; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'VZA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 76; intData < 87; intData++) {
                      kpiDataJan.push(data[intData].sep);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 76; intLabel < 81; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 81; intMarData < 91; intMarData++) {
                      marDataJan.push(data[intMarData].sep);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 81; intMarLabel < 91; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'DAP':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 91; intData < 96; intData++) {
                      kpiDataJan.push(data[intData].sep);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 91; intLabel < 96; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 96; intMarData < 106; intMarData++) {
                      marDataJan.push(data[intMarData].sep);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 96; intMarLabel < 106; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  default:
                    //
                    break;
                }
                break;
              case 'Oct':
                //check for username
                switch (sname) {
                  case 'BGW':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 1; intData < 6; intData++) {
                      kpiDataJan.push(data[intData].oct);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 1; intLabel < 6; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 6; intMarData < 16; intMarData++) {
                      marDataJan.push(data[intMarData].oct);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 6; intMarLabel < 16; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'SDR':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 16; intData < 21; intData++) {
                      kpiDataJan.push(data[intData].oct);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 16; intLabel < 21; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 21; intMarData < 31; intMarData++) {
                      marDataJan.push(data[intMarData].oct);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 21; intMarLabel < 31; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'CAM':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 31; intData < 36; intData++) {
                      kpiDataJan.push(data[intData].oct);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 31; intLabel < 36; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 36; intMarData < 46; intMarData++) {
                      marDataJan.push(data[intMarData].oct);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 36; intMarLabel < 46; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FRC':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 46; intData < 51; intData++) {
                      kpiDataJan.push(data[intData].oct);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 46; intLabel < 51; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 51; intMarData < 61; intMarData++) {
                      marDataJan.push(data[intMarData].oct);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 51; intMarLabel < 61; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FFA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 61; intData < 66; intData++) {
                      kpiDataJan.push(data[intData].oct);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 61; intLabel < 66; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 66; intMarData < 76; intMarData++) {
                      marDataJan.push(data[intMarData].oct);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 66; intMarLabel < 76; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'VZA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 76; intData < 87; intData++) {
                      kpiDataJan.push(data[intData].oct);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 76; intLabel < 81; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 81; intMarData < 91; intMarData++) {
                      marDataJan.push(data[intMarData].oct);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 81; intMarLabel < 91; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'DAP':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 91; intData < 96; intData++) {
                      kpiDataJan.push(data[intData].oct);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 91; intLabel < 96; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 96; intMarData < 106; intMarData++) {
                      marDataJan.push(data[intMarData].oct);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 96; intMarLabel < 106; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  default:
                    //
                    break;
                }
                break;
              case 'Nov':
                //check for username
                switch (sname) {
                  case 'BGW':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 1; intData < 6; intData++) {
                      kpiDataJan.push(data[intData].nov);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 1; intLabel < 6; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 6; intMarData < 16; intMarData++) {
                      marDataJan.push(data[intMarData].nov);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 6; intMarLabel < 16; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'SDR':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 16; intData < 21; intData++) {
                      kpiDataJan.push(data[intData].nov);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 16; intLabel < 21; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 21; intMarData < 31; intMarData++) {
                      marDataJan.push(data[intMarData].nov);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 21; intMarLabel < 31; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'CAM':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 31; intData < 36; intData++) {
                      kpiDataJan.push(data[intData].nov);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 31; intLabel < 36; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 36; intMarData < 46; intMarData++) {
                      marDataJan.push(data[intMarData].nov);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 36; intMarLabel < 46; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FRC':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 46; intData < 51; intData++) {
                      kpiDataJan.push(data[intData].nov);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 46; intLabel < 51; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 51; intMarData < 61; intMarData++) {
                      marDataJan.push(data[intMarData].nov);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 51; intMarLabel < 61; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FFA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 61; intData < 66; intData++) {
                      kpiDataJan.push(data[intData].nov);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 61; intLabel < 66; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 66; intMarData < 76; intMarData++) {
                      marDataJan.push(data[intMarData].nov);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 66; intMarLabel < 76; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'VZA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 76; intData < 87; intData++) {
                      kpiDataJan.push(data[intData].nov);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 76; intLabel < 81; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 81; intMarData < 91; intMarData++) {
                      marDataJan.push(data[intMarData].nov);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 81; intMarLabel < 91; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'DAP':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 91; intData < 96; intData++) {
                      kpiDataJan.push(data[intData].nov);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 91; intLabel < 96; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 96; intMarData < 106; intMarData++) {
                      marDataJan.push(data[intMarData].nov);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 96; intMarLabel < 106; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  default:
                    //
                    break;
                }
                break;
              case 'Dec':
                //check for username
                switch (sname) {
                  case 'BGW':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 1; intData < 6; intData++) {
                      kpiDataJan.push(data[intData].des);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 1; intLabel < 6; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 6; intMarData < 16; intMarData++) {
                      marDataJan.push(data[intMarData].des);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 6; intMarLabel < 16; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'SDR':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 16; intData < 21; intData++) {
                      kpiDataJan.push(data[intData].des);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 16; intLabel < 21; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 21; intMarData < 31; intMarData++) {
                      marDataJan.push(data[intMarData].des);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 21; intMarLabel < 31; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'CAM':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 31; intData < 36; intData++) {
                      kpiDataJan.push(data[intData].des);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 31; intLabel < 36; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 36; intMarData < 46; intMarData++) {
                      marDataJan.push(data[intMarData].des);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 36; intMarLabel < 46; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FRC':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 46; intData < 51; intData++) {
                      kpiDataJan.push(data[intData].des);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 46; intLabel < 51; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 51; intMarData < 61; intMarData++) {
                      marDataJan.push(data[intMarData].des);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 51; intMarLabel < 61; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'FFA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 61; intData < 66; intData++) {
                      kpiDataJan.push(data[intData].des);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 61; intLabel < 66; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 66; intMarData < 76; intMarData++) {
                      marDataJan.push(data[intMarData].des);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 66; intMarLabel < 76; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'VZA':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 76; intData < 87; intData++) {
                      kpiDataJan.push(data[intData].des);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 76; intLabel < 81; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 81; intMarData < 91; intMarData++) {
                      marDataJan.push(data[intMarData].des);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 81; intMarLabel < 91; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  case 'DAP':
                    //kpi data
                    var kpiDataJan = [];
                    for (var intData = 91; intData < 96; intData++) {
                      kpiDataJan.push(data[intData].des);
                    }
                    console.log(kpiDataJan)
                    kpiChartMonthly.data.datasets[0].data = kpiDataJan;
                    //kpi label
                    var kpiLabelJan = [];
                    for (var intLabel = 91; intLabel < 96; intLabel++) {
                      kpiLabelJan.push(data[intLabel].detail);
                    }
                    console.log(kpiLabelJan)
                    kpiChartMonthly.data.labels = kpiLabelJan;
                    //mar data
                    var marDataJan = [];
                    for (var intMarData = 96; intMarData < 106; intMarData++) {
                      marDataJan.push(data[intMarData].des);
                    }
                    console.log(marDataJan)
                    marChartMonthly.data.datasets[0].data = marDataJan;
                    //mar label
                    var marLabelJan = [];
                    for (var intMarLabel = 96; intMarLabel < 106; intMarLabel++) {
                      marLabelJan.push(data[intMarLabel].detail);
                    }
                    console.log(marLabelJan)
                    marChartMonthly.data.labels = marLabelJan;
                    break;
                  default:
                    //
                    break;
                }
                break;
              default:
                kpiChartMonthly.data.datasets[0].data = []
                kpiChartMonthly.data.labels = []
                marChartMonthly.data.datasets[0].data = []
                marChartMonthly.data.labels = []
                break;
            }
            kpiDataColor();
            marDataColor();
            kpiChartMonthly.options.title.text = kpiTitle;
            marChartMonthly.options.title.text = marTitle;
            //change kpi color chart
            kpiChartMonthly.data.datasets[0].backgroundColor = kpiColors
            //change mar color chart
            marChartMonthly.data.datasets[0].backgroundColor = marColors

            kpiChartMonthly.update();
            marChartMonthly.update();
          }
        })
    });

  }
  window.onload = start;