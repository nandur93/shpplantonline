<?php
// Script ini akan mengkonversi table php menjadi JSON array
// Outputnya adalah [{"mtx_ipp_prd":"4","mtx_ipp_pnp":"2","mtx_ipp_em":"4","mtx_ipp_qa":"2","mtx_ipp_hrga":"2","mtx_ipp_ms":"2"}]
header('Content-Type: application/json');
include($_SERVER['DOCUMENT_ROOT'] . '/shpplantonline/php/connections/shpplantonline_conn.php');

$sql = "SELECT ipp_id, ipp_month, ipp_person_name, kpi_dev_cost, kpi_gen_com, kpi_poe_shp, kpi_rfid_ams, kpi_tpm_imp, mar_att_ss_qcc, mar_com_center, mar_dept_cost, mar_oee_plant, mar_paperless, mar_preparation, mar_reg_budget, mar_score_cross, mar_tpm_imp, mar_world_class FROM `shpplantonline`.`plant_ipp`";
$result = $conn->query($sql);

$data = array();
foreach ($result as $row) {
	$data[] = $row;
}

mysqli_close($conn);

echo json_encode($data);