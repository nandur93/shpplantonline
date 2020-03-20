// Custom semantic JQuery
// Copyright https://semantic-ui.com/examples/homepage.html
// Added by nandur93
// Date added: 27 Feb 20

$(document)
  .ready(function () {

    // fix menu when passed
    $('.masthead')
      .visibility({
        once: false,
        onBottomPassed: function () {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function () {
          $('.fixed.menu').transition('fade out');
        }
      });

    // create sidebar and attach to menu open
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item');

    // dropdown bulan
    $('#bulan')
      .dropdown({
        clearable: true
      })

    // dropdown clearable
    $('#department')
      .dropdown({
        clearable: true
      });

    // dropdown clearable
    $('#ffa_mar1_input')
      .dropdown({
        clearable: true
      });

    /* // Username input
    $('#uname')
      .dropdown({
        clearable: true,
        onChange: function (_val) {
          var sname = $('#uname').find(":selected").text();
          if (sname == 'BGW') { // BGW
            $('#fname').val('Bernadus Gunawan Widada')
            $('#nik').val('950500003')
            $('#department').val('Plant Head')
          } else if (sname == 'SDR') {
            $('#fname').val('Susilo Dwi Raharjo')
            $('#nik').val('150900245')
            $('#department').val('HRGA')
          } else if (sname == 'CAM') {
            $('#fname').val('Cahyo Agung Martanto')
            $('#nik').val('060800019')
            $('#department').val('EM')
          } else if (sname == 'FRC') {
            $('#fname').val('Factur Rachman')
            $('#nik').val('170200083')
            $('#department').val('QA')
          } else if (sname == 'FFA') {
            $('#fname').val('Fazar Fauzan')
            $('#nik').val('060800021')
            $('#department').val('Produksi')
          } else if (sname == 'VZA') {
            $('#fname').val('Verdiana ZNB')
            $('#nik').val('151100330')
            $('#department').val('MS Plant')
          } else if (sname == 'DAP') {
            $('#fname').val('Dyanza Aria Perdana')
            $('#nik').val('161200728')
            $('#department').val('PPC')
          } else {
            $('#fname').val('')
            $('#nik').val('')
            $('#department').val('')
          }
        }
      }); */

    // $('.icon')
    //   .popup({
    //     inline: true
    //   });

    // POE Input
    $("#poeinput").change(function () {

      // Get week
      var elm = document.createElement('input')
      elm.type = 'week'
      elm.valueAsDate = new Date()
      var week = elm.value.split('W').pop()
      // End get week

      if ($(this).val().length === 0) {
        $('#poeskala').text('Bobot 25%')
        $('#poeskala').removeClass('red')
        $('#poeskala').removeClass('yellow')
        $('#poeskala').removeClass('green')
        $('#poeskala').removeClass('teal')
        $('#poeskala').removeClass('blue')
      } else if ($(this).val() < 72) {
        $('#poeskala').text('Grade 1. x < 72%')
        $('#poeskala').addClass('red')
        $('#poeskala').removeClass('yellow')
        $('#poeskala').removeClass('green')
        $('#poeskala').removeClass('teal')
        $('#poeskala').removeClass('blue')
        $('#poe1_dimmer')
          .dimmer({
            closable: false
          })
          .dimmer('show');
        $('#picapoe').val(week)
      } else if ($(this).val() < 74) {
        $('#poeskala').text('Grade 2. 72% <= x < 74%')
        $('#poeskala').removeClass('red')
        $('#poeskala').addClass('yellow')
        $('#poeskala').removeClass('green')
        $('#poeskala').removeClass('teal')
        $('#poeskala').removeClass('blue')
      } else if ($(this).val() < 76) {
        $('#poeskala').text('Grade 3. 74% <= x < 76%')
        $('#poeskala').removeClass('red')
        $('#poeskala').removeClass('yellow')
        $('#poeskala').addClass('green')
        $('#poeskala').removeClass('teal')
        $('#poeskala').removeClass('blue')
      } else if ($(this).val() < 78) {
        $('#poeskala').text('Grade 4. 76% <= x < 78%')
        $('#poeskala').removeClass('red')
        $('#poeskala').removeClass('yellow')
        $('#poeskala').removeClass('green')
        $('#poeskala').addClass('teal')
        $('#poeskala').removeClass('blue')
      } else if ($(this).val() >= 78) {
        $('#poeskala').text('Grade 5. x ≥ 78%')
        $('#poeskala').removeClass('red')
        $('#poeskala').removeClass('yellow')
        $('#poeskala').removeClass('green')
        $('#poeskala').removeClass('teal')
        $('#poeskala').addClass('blue')
      } else {
        $('#poeskala').text('Bobot 25%')
        $('#poeskala').removeClass('red')
        $('#poeskala').removeClass('yellow')
        $('#poeskala').removeClass('green')
        $('#poeskala').removeClass('teal')
        $('#poeskala').removeClass('blue')
      }
    });

    $('#save_dim1').click(function () {
      $('#poe1_dimmer')
        .dimmer({
          closable: true
        })
        .dimmer('hide');
    });

    // capacity Input
    $("#capinput").change(function () {
      if ($(this).val().length === 0) {
        $('#capskala').text('Bobot 15%')
        $('#capskala').removeClass('red')
        $('#capskala').removeClass('yellow')
        $('#capskala').removeClass('green')
        $('#capskala').removeClass('teal')
        $('#capskala').removeClass('blue')
      } else if ($(this).val() >= 90) {
        $('#capskala').text('Grade 1. x =>90%')
        $('#capskala').addClass('red')
        $('#capskala').removeClass('yellow')
        $('#capskala').removeClass('green')
        $('#capskala').removeClass('teal')
        $('#capskala').removeClass('blue')
      } else if ($(this).val() < 60) {
        $('#capskala').text('Grade 5. x < 60%')
        $('#capskala').removeClass('red')
        $('#capskala').removeClass('yellow')
        $('#capskala').removeClass('green')
        $('#capskala').removeClass('teal')
        $('#capskala').addClass('blue')
      } else if ($(this).val() < 70) {
        $('#capskala').text('Grade 4. 60% <= x < 70%')
        $('#capskala').removeClass('red')
        $('#capskala').removeClass('yellow')
        $('#capskala').removeClass('green')
        $('#capskala').addClass('teal')
        $('#capskala').removeClass('blue')
      } else if ($(this).val() < 80) {
        $('#capskala').text('Grade 3. 70% <= x < 80%')
        $('#capskala').removeClass('red')
        $('#capskala').removeClass('yellow')
        $('#capskala').addClass('green')
        $('#capskala').removeClass('teal')
        $('#capskala').removeClass('blue')
      } else if ($(this).val() < 90) {
        $('#capskala').text('Grade 2. 80% <= x < 90%')
        $('#capskala').removeClass('red')
        $('#capskala').addClass('yellow')
        $('#capskala').removeClass('green')
        $('#capskala').removeClass('teal')
        $('#capskala').removeClass('blue')
      } else {
        $('#capskala').text('Bobot 15%')
        $('#capskala').removeClass('red')
        $('#capskala').removeClass('yellow')
        $('#capskala').removeClass('green')
        $('#capskala').removeClass('teal')
        $('#capskala').removeClass('blue')
      }
    });

    // department cost Input
    $("#depcostinput").change(function () {
      if ($(this).val().length === 0) {
        $('#depcostskala').text('Bobot 25%')
        $('#depcostskala').removeClass('red')
        $('#depcostskala').removeClass('yellow')
        $('#depcostskala').removeClass('green')
        $('#depcostskala').removeClass('teal')
        $('#depcostskala').removeClass('blue')
      } else if ($(this).val() >= 5009) {
        $('#depcostskala').text('Grade 1. Rp5,009/kg')
        $('#depcostskala').addClass('red')
        $('#depcostskala').removeClass('yellow')
        $('#depcostskala').removeClass('green')
        $('#depcostskala').removeClass('teal')
        $('#depcostskala').removeClass('blue')
      } else if ($(this).val() >= 4782) {
        $('#depcostskala').text('Grade 2. Rp4,782/kg')
        $('#depcostskala').removeClass('red')
        $('#depcostskala').addClass('yellow')
        $('#depcostskala').removeClass('green')
        $('#depcostskala').removeClass('teal')
        $('#depcostskala').removeClass('blue')
      } else if ($(this).val() >= 4554) {
        $('#depcostskala').text('Grade 3. Rp4,554/kg')
        $('#depcostskala').removeClass('red')
        $('#depcostskala').removeClass('yellow')
        $('#depcostskala').addClass('green')
        $('#depcostskala').removeClass('teal')
        $('#depcostskala').removeClass('blue')
      } else if ($(this).val() >= 4326) {
        $('#depcostskala').text('Grade 4. Rp4,326/kg')
        $('#depcostskala').removeClass('red')
        $('#depcostskala').removeClass('yellow')
        $('#depcostskala').removeClass('green')
        $('#depcostskala').addClass('teal')
        $('#depcostskala').removeClass('blue')
      } else if ($(this).val() <= 4325) {
        $('#depcostskala').text('Grade 5. Rp4,009/kg')
        $('#depcostskala').removeClass('red')
        $('#depcostskala').removeClass('yellow')
        $('#depcostskala').removeClass('green')
        $('#depcostskala').removeClass('teal')
        $('#depcostskala').addClass('blue')
      } else {
        $('#depcostskala').text('Bobot 25%')
        $('#depcostskala').removeClass('red')
        $('#depcostskala').removeClass('yellow')
        $('#depcostskala').removeClass('green')
        $('#depcostskala').removeClass('teal')
        $('#depcostskala').removeClass('blue')
      }
    });

    // department ibc Input
    $("#ibcinput").change(function () {
      if ($(this).val().length === 0) {
        $('#ibcskala').text('Bobot 20%')
        $('#ibcskala').removeClass('red')
        $('#ibcskala').removeClass('yellow')
        $('#ibcskala').removeClass('green')
        $('#ibcskala').removeClass('teal')
        $('#ibcskala').removeClass('blue')
      } else if ($(this).val() <= 13) {
        $('#ibcskala').text('Grade 1. Reduce 12 MP')
        $('#ibcskala').addClass('red')
        $('#ibcskala').removeClass('yellow')
        $('#ibcskala').removeClass('green')
        $('#ibcskala').removeClass('teal')
        $('#ibcskala').removeClass('blue')
      } else if ($(this).val() >= 20) {
        $('#ibcskala').text('Grade 5. Reduce 20 MP')
        $('#ibcskala').removeClass('red')
        $('#ibcskala').removeClass('yellow')
        $('#ibcskala').removeClass('green')
        $('#ibcskala').removeClass('teal')
        $('#ibcskala').addClass('blue')
      } else if ($(this).val() >= 18) {
        $('#ibcskala').text('Grade 4. Reduce 18 MP')
        $('#ibcskala').removeClass('red')
        $('#ibcskala').removeClass('yellow')
        $('#ibcskala').removeClass('green')
        $('#ibcskala').addClass('teal')
        $('#ibcskala').removeClass('blue')
      } else if ($(this).val() >= 16) {
        $('#ibcskala').text('Grade 3. Reduce 16 MP')
        $('#ibcskala').removeClass('red')
        $('#ibcskala').removeClass('yellow')
        $('#ibcskala').addClass('green')
        $('#ibcskala').removeClass('teal')
        $('#ibcskala').removeClass('blue')
      } else if ($(this).val() >= 14) {
        $('#ibcskala').text('Grade 2. Reduce 14 MP')
        $('#ibcskala').removeClass('red')
        $('#ibcskala').addClass('yellow')
        $('#ibcskala').removeClass('green')
        $('#ibcskala').removeClass('teal')
        $('#ibcskala').removeClass('blue')
      } else {
        $('#ibcskala').text('Bobot 20%')
        $('#ibcskala').removeClass('red')
        $('#ibcskala').removeClass('yellow')
        $('#ibcskala').removeClass('green')
        $('#ibcskala').removeClass('teal')
        $('#ibcskala').removeClass('blue')
      }
    });

    // department tpm Input
    $("#tpminput").change(function () {
      if ($(this).val().length === 0) {
        $('#tpmskala').text('Bobot 15%')
        $('#tpmskala').removeClass('red')
        $('#tpmskala').removeClass('yellow')
        $('#tpmskala').removeClass('green')
        $('#tpmskala').removeClass('teal')
        $('#tpmskala').removeClass('blue')
      } else if ($(this).val() <= 94) {
        $('#tpmskala').text('Grade 1. 90% to Health Check Score')
        $('#tpmskala').addClass('red')
        $('#tpmskala').removeClass('yellow')
        $('#tpmskala').removeClass('green')
        $('#tpmskala').removeClass('teal')
        $('#tpmskala').removeClass('blue')
      } else if ($(this).val() >= 110) {
        $('#tpmskala').text('Grade 5. 110% to Health Check Score')
        $('#tpmskala').removeClass('red')
        $('#tpmskala').removeClass('yellow')
        $('#tpmskala').removeClass('green')
        $('#tpmskala').removeClass('teal')
        $('#tpmskala').addClass('blue')
      } else if ($(this).val() >= 105) {
        $('#tpmskala').text('Grade 4. 105% to Health Check Score')
        $('#tpmskala').removeClass('red')
        $('#tpmskala').removeClass('yellow')
        $('#tpmskala').removeClass('green')
        $('#tpmskala').addClass('teal')
        $('#tpmskala').removeClass('blue')
      } else if ($(this).val() >= 100) {
        $('#tpmskala').text('Grade 3. 100% to Health Check Score')
        $('#tpmskala').removeClass('red')
        $('#tpmskala').removeClass('yellow')
        $('#tpmskala').addClass('green')
        $('#tpmskala').removeClass('teal')
        $('#tpmskala').removeClass('blue')
      } else if ($(this).val() >= 95) {
        $('#tpmskala').text('Grade 2. 95% to Health Check Score')
        $('#tpmskala').removeClass('red')
        $('#tpmskala').addClass('yellow')
        $('#tpmskala').removeClass('green')
        $('#tpmskala').removeClass('teal')
        $('#tpmskala').removeClass('blue')
      } else {
        $('#tpmskala').text('Bobot 15%')
        $('#tpmskala').removeClass('red')
        $('#tpmskala').removeClass('yellow')
        $('#tpmskala').removeClass('green')
        $('#tpmskala').removeClass('teal')
        $('#tpmskala').removeClass('blue')
      }
    });

    // Improve general competency for all employee ffa_mar1_input
    $("#ffa_mar1_input").change(function () {
      if ($(this).val().length === 0) {
        $('#ffa_mar1_skala').text('Bobot 5%')
        $('#ffa_mar1_skala').removeClass('red')
        $('#ffa_mar1_skala').removeClass('yellow')
        $('#ffa_mar1_skala').removeClass('green')
        $('#ffa_mar1_skala').removeClass('teal')
        $('#ffa_mar1_skala').removeClass('blue')
      } else if ($(this).val() == 'March') {
        $('#ffa_mar1_skala').text('Grade 1. 100% August 2020')
        $('#ffa_mar1_skala').addClass('red')
        $('#ffa_mar1_skala').removeClass('yellow')
        $('#ffa_mar1_skala').removeClass('green')
        $('#ffa_mar1_skala').removeClass('teal')
        $('#ffa_mar1_skala').removeClass('blue')
      } else if ($(this).val() == 'April') {
        $('#ffa_mar1_skala').text('Grade 5. 100% April 2020')
        $('#ffa_mar1_skala').removeClass('red')
        $('#ffa_mar1_skala').removeClass('yellow')
        $('#ffa_mar1_skala').removeClass('green')
        $('#ffa_mar1_skala').removeClass('teal')
        $('#ffa_mar1_skala').addClass('blue')
      } else if ($(this).val() == 'May') {
        $('#ffa_mar1_skala').text('Grade 4. 100% May 2020')
        $('#ffa_mar1_skala').removeClass('red')
        $('#ffa_mar1_skala').removeClass('yellow')
        $('#ffa_mar1_skala').removeClass('green')
        $('#ffa_mar1_skala').addClass('teal')
        $('#ffa_mar1_skala').removeClass('blue')
      } else if (bulan == 'June') {
        $('#ffa_mar1_skala').text('Grade 3. 100% June 2020')
        $('#ffa_mar1_skala').removeClass('red')
        $('#ffa_mar1_skala').removeClass('yellow')
        $('#ffa_mar1_skala').addClass('green')
        $('#ffa_mar1_skala').removeClass('teal')
        $('#ffa_mar1_skala').removeClass('blue')
      } else if (bulan == 'July') {
        $('#ffa_mar1_skala').text('Grade 2. 100% July 2020')
        $('#ffa_mar1_skala').removeClass('red')
        $('#ffa_mar1_skala').addClass('yellow')
        $('#ffa_mar1_skala').removeClass('green')
        $('#ffa_mar1_skala').removeClass('teal')
        $('#ffa_mar1_skala').removeClass('blue')
      } else {
        $('#ffa_mar1_skala').text('Bobot 5%')
        $('#ffa_mar1_skala').removeClass('red')
        $('#ffa_mar1_skala').removeClass('yellow')
        $('#ffa_mar1_skala').removeClass('green')
        $('#ffa_mar1_skala').removeClass('teal')
        $('#ffa_mar1_skala').removeClass('blue')
      }
    });

    // popup poe skala
    $('#poeskala')
      .popup({
        inline: true,
        hoverable: true,
        position: 'bottom left',
      });

    // popup capacity skala
    $('#capskala')
      .popup({
        inline: true,
        hoverable: true,
        position: 'bottom left',
      });

    // popup depcost skala
    $('#depcostskala')
      .popup({
        inline: true,
        hoverable: true,
        position: 'bottom left',
      });

    // popup ibc skala
    $('#ibcskala')
      .popup({
        inline: true,
        hoverable: true,
        position: 'bottom left',
      });

    // popup ibc skala
    $('#tpmskala')
      .popup({
        inline: true,
        hoverable: true,
        position: 'bottom left',
      });

    // UI sticky kalbe
    $('.ui.sticky')
      .sticky({
        offset: 50,
        pushing: true,
        context: '#kalbe',
      });

    //custom calendar
    var months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    $('#ffa_mar1_cal').calendar({
      type: 'date',
      monthFirst: false,
      formatter: {
        date: function (date, settings) {
          if (!date) return '';
          var day = date.getDate();
          var month = months[date.getMonth()];
          var year = date.getFullYear();
          return day + '/' + month + '/' + year;
        }
      },
      onChange: function (date, text, mode) {
        $('#ffa_mar1_input').val(months[date.getMonth()]);
        if ($('#ffa_mar1_input').val().length === 0) {
          $('#ffa_mar1_skala').text('Bobot 5%')
          $('#ffa_mar1_skala').removeClass('red')
          $('#ffa_mar1_skala').removeClass('yellow')
          $('#ffa_mar1_skala').removeClass('green')
          $('#ffa_mar1_skala').removeClass('teal')
          $('#ffa_mar1_skala').removeClass('blue')
        } else if ($('#ffa_mar1_input').val() == 'August') {
          $('#ffa_mar1_skala').text('Grade 1. 100% August 2020')
          $('#ffa_mar1_skala').addClass('red')
          $('#ffa_mar1_skala').removeClass('yellow')
          $('#ffa_mar1_skala').removeClass('green')
          $('#ffa_mar1_skala').removeClass('teal')
          $('#ffa_mar1_skala').removeClass('blue')
        } else if ($('#ffa_mar1_input').val() == 'April') {
          $('#ffa_mar1_skala').text('Grade 5. 100% April 2020')
          $('#ffa_mar1_skala').removeClass('red')
          $('#ffa_mar1_skala').removeClass('yellow')
          $('#ffa_mar1_skala').removeClass('green')
          $('#ffa_mar1_skala').removeClass('teal')
          $('#ffa_mar1_skala').addClass('blue')
        } else if ($('#ffa_mar1_input').val() == 'May') {
          $('#ffa_mar1_skala').text('Grade 4. 100% May 2020')
          $('#ffa_mar1_skala').removeClass('red')
          $('#ffa_mar1_skala').removeClass('yellow')
          $('#ffa_mar1_skala').removeClass('green')
          $('#ffa_mar1_skala').addClass('teal')
          $('#ffa_mar1_skala').removeClass('blue')
        } else if ($('#ffa_mar1_input').val() == 'June') {
          $('#ffa_mar1_skala').text('Grade 3. 100% June 2020')
          $('#ffa_mar1_skala').removeClass('red')
          $('#ffa_mar1_skala').removeClass('yellow')
          $('#ffa_mar1_skala').addClass('green')
          $('#ffa_mar1_skala').removeClass('teal')
          $('#ffa_mar1_skala').removeClass('blue')
        } else if ($('#ffa_mar1_input').val() == 'July') {
          $('#ffa_mar1_skala').text('Grade 2. 100% July 2020')
          $('#ffa_mar1_skala').removeClass('red')
          $('#ffa_mar1_skala').addClass('yellow')
          $('#ffa_mar1_skala').removeClass('green')
          $('#ffa_mar1_skala').removeClass('teal')
          $('#ffa_mar1_skala').removeClass('blue')
        } else {
          $('#ffa_mar1_skala').text('Bobot 5%')
          $('#ffa_mar1_skala').removeClass('red')
          $('#ffa_mar1_skala').removeClass('yellow')
          $('#ffa_mar1_skala').removeClass('green')
          $('#ffa_mar1_skala').removeClass('teal')
          $('#ffa_mar1_skala').removeClass('blue')
        }
      }
    });
  });