<?php
// Script ini akan mengkonversi table php menjadi JSON array
// Outputnya adalah [{"mtx_ipp_prd":"4","mtx_ipp_pnp":"2","mtx_ipp_em":"4","mtx_ipp_qa":"2","mtx_ipp_hrga":"2","mtx_ipp_ms":"2"}]
header('Content-Type: application/json');
include($_SERVER['DOCUMENT_ROOT'] . '/shpplantonline/php/connections/shpplantonline_conn.php');

$sql = "SELECT mtx_ipp_prd, mtx_ipp_pnp, mtx_ipp_em,mtx_ipp_qa, mtx_ipp_hrga, mtx_ipp_ms FROM `shpplantonline`.`plant_ipp_matrix`";
$result = $conn->query($sql);

$data = array();
foreach ($result as $row) {
	$data[] = $row;
}

mysqli_close($conn);

echo json_encode($data);
