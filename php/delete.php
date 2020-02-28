<?php
include 'koneksi.php';
$id = $_GET['person_id'];
$link = mysqli_connect("localhost", "root", "admin", "shpplantonline");
mysqli_query($link, "DELETE FROM plant_person WHERE plant_person.person_ID='$id'") or die(mysql_error());
header("location:/shpplantonline/html/users.html");
?>