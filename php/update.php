<?php 
include'koneksi.php';
//nilai variable diambil dari tag name
$person_id = $_POST["id"];
$person_name = ucwords($_POST["name"]);
$person_sname = strtoupper($_POST["sname"]);
$person_password = $_POST["password"];
$person_nik = strtoupper($_POST["nik"]);
$person_dept = ucwords($_POST["dept"]);
$person_div = ucwords($_POST["div"]);
$person_number = $_POST["number"];
$person_quote = $_POST["quote"];
$person_registered = $_POST["date"];

mysqli_query($conn, "UPDATE plant_person SET person_name='$person_name', person_sname='$person_sname', person_password='$person_password', person_nik='$person_nik', person_dept='$person_dept', person_div='$person_div', person_number='$person_number', person_quote='$person_quote', person_registered='$person_registered' WHERE plant_person.person_ID='$person_id'");

header("location:/shpplantonline/html/users.html");
?>