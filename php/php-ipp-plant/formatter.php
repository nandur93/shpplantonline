<?php
header('Content-Type: application/json');
include($_SERVER['DOCUMENT_ROOT'] . '/shpplantonline/php/connections/shpplantonline_conn.php');
   
$sql = "SELECT ipp_person_name, ipp_gen_com FROM plant_ipp";
$result = $conn->query($sql);

$data = array();
foreach ($result as $row) {
	$data[] = $row;
}

mysqli_close($conn);

echo json_encode($data);
