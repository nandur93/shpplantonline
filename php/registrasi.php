<?php
include'koneksi.php';
//nilai variable diambil dari tag name
//$person_id = $_POST[""]
$person_name = ucwords($_POST["name"]);
$person_sname = strtoupper($_POST["sname"]);
$person_password = $_POST["password"];
$person_nik = strtoupper($_POST["nik"]);
$person_dept = ucwords($_POST["dept"]);
$person_div = ucwords($_POST["div"]);
$person_number = $_POST["number"];
$person_quote = $_POST["quote"];
$person_registered = $_POST["date"];

mysqli_query($conn, "SELECT * FROM plant_person");
mysqli_query($conn, "INSERT INTO `plant_person` (`person_ID`, `person_name`, `person_sname`, `person_password`, `person_nik`, `person_dept`, `person_div`, `person_number`, `person_quote`, `person_registered`)
VALUES ('', '$person_name', '$person_sname', '$person_password', '$person_nik', '$person_dept', '$person_div', '$person_number',  '$person_quote', '$person_registered');");

header("Location:/shpplantonline/html/users.html");
?>