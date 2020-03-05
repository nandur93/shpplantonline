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

    // dropdown poe skala
    $('#poeskala')
      .dropdown({
        clearable: true
      });

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
      });

    $('.icon')
      .popup({
        inline: true
      });

  });