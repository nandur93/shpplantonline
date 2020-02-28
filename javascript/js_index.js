function dropFnc(){
	var vSname = document.getElementById("idsname").value;
	var vName = document.getElementById("idname");
	var vAuditeeSName = document.getElementById("idsname_auditee");
	var vDept = document.getElementById("iddept");
	var vSign = document.getElementById("idsign");
	switch(vSname){
		case "":
			vName.value = "Pilih Nama Auditor";
			vAuditeeSName.value = "";
			vDept.value = "";
			break;
		case "NDU":
			vName.value = "Nandang Duryat";
			vAuditeeSName.value = "SAS";
			vDept.value = "MS Plant";
			break;
		case "VZA":
			vName.value = "Verdiana Zahroh";
			vAuditeeSName.value = "BSN";
			vDept.value = "MS Plant";
			break;
		case "BSN":
			vName.value = "Budi Santoso";
			vAuditeeSName.value = "NDU";
			vDept.value = "MS Plant";
			break;
		case "DST":
			vName.value = "Dedi Setiadi";
			vAuditeeSName.value = "VZA"
			vDept.value = "PPC Plant"
			break;
		default:
			vName.value = "Nama auditor tidak terdaftar";
	}
}
setInterval(function() {
	var currentTime = new Date ( );    
	var currentHours = currentTime.getHours ( );   
	var currentMinutes = currentTime.getMinutes ( );   
	var currentSeconds = currentTime.getSeconds ( );
	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;   
	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;    
	var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";    
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;    
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;  
	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
	document.getElementById("time").value = currentTimeString;
}, 1000);

Date.prototype.toDateInputValue = (function() {
	var local = new Date(this);
	local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
	return local.toJSON().slice(0,10);
});
document.getElementById('date').value = new Date().toDateInputValue();

//topNav
function topNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//topNavScroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
		document.getElementById("myTopnav").style.top = "0";
  } else {
		document.getElementById("myTopnav").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
}
//delConfirmation
function del() {
  var txt;
  var r = confirm("Press a button!");
  if (r == true) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}
// JSFiddle
$(document)
    .ready(function() {

      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;

    })
  ;