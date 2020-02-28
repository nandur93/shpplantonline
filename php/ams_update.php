<?php 
include'shpams_koneksi.php';
//nilai variable diambil dari tag name
//ucfirst() Contoh satu
//lcfirst() cONTOH DUA
//strtoupper() CONTOH TIGA
//strtolower() contoh empat
//ucwords() Contoh Lima
$asset_type = $_POST["asset_type"];
$asset_code_parent = ($_POST["asset_code_parent"]);
$asset_code_child = $_POST["asset_code_child"];
$asset_description = ($_POST["asset_description"]);
$asset_buy_date = ($_POST["asset_buy_date"]);
$asset_cost = $_POST["asset_cost"];
$asset_unit_oracle = ($_POST["asset_unit_oracle"]);
$asset_unit_actual = $_POST["asset_unit_actual"];
$asset_unit_variance = ($_POST["asset_unit_variance"]);
$asset_status = $_POST["asset_status"];
$asset_location = ($_POST["asset_location"]);
$asset_user = $_POST["asset_user"];
$asset_pic = ($_POST["asset_pic"]);
$asset_note = $_POST["asset_note"];
$asset_cost_variance = ($_POST["asset_cost_variance"]);
$asset_nbv = $_POST["asset_nbv"];
$asset_nbv_variance = ($_POST["asset_nbv_variance"]);

mysqli_query($conn, "UPDATE plant_asset SET asset_code_child='$asset_code_child', asset_type='$asset_type', asset_code_parent='$asset_code_parent', asset_description='$asset_description', asset_buy_date='$asset_buy_date', asset_cost='$asset_cost', asset_unit_oracle='$asset_unit_oracle', asset_unit_actual='$asset_unit_actual', asset_unit_variance='$asset_unit_variance', asset_status='$asset_status', asset_location='$asset_location', asset_user='$asset_user', asset_pic='$asset_pic', asset_note='$asset_note', asset_cost_variance='$asset_cost_variance', asset_nbv='$asset_nbv', asset_nbv_variance='$asset_nbv_variance' WHERE plant_asset.asset_code_child='$asset_code_child'");

header("location:/shpplantonline/html/ams_assets.html");
?>