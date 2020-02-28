<?php
$link = mysqli_connect("localhost", "root", "admin", "shpplantonline");
$id   = $_GET['id'];
$sname = $_GET['sname'];
$auditeename = $_GET['auditee'];
$query_mysql = mysqli_query($link, "SELECT * FROM tbl_auditor WHERE tbl_auditor.ID ='$id', tbl_auditor.adtr_snmae = '$sname", tbl_auditor.adtee_name) or die(mysql_error());
while ($data = mysqli_fetch_array($query_mysql)) {
?>