<?php
include'koneksi.php';
$date = $_POST["date"];
$name = $_POST["name"];
$sname = $_POST["sname"];
$dept = $_POST["dept"];
$sign = $_POST["sign"];

mysqli_query($conn, "SELECT * FROM tbl_auditor");
mysqli_query($conn, "INSERT INTO `tbl_auditor` (`date`, `adtr_name`, `adtr_sname`, `adtr_dept`, `adtr_sign`, `ID`) VALUES ('$date','$name','$sname','$dept','$sign', NULL);");

header("Location:/shpplantonline/php/auditor_data.php");
?>