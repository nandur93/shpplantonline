<?php
include'shpams_koneksi.php';
//nilai variable diambil dari tag name
//$person_id = $_POST[""]
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

mysqli_query($conn, "SELECT * FROM plant_asset");
mysqli_query($conn, "INSERT INTO `plant_asset` (`asset_type`, `asset_code_parent`, `asset_code_child`, `asset_description`, `asset_buy_date`, `asset_cost`, `asset_unit_oracle`, `asset_unit_actual`, `asset_unit_variance`, `asset_status`, `asset_location`, `asset_user`, `asset_pic`, `asset_note`, `asset_cost_variance`, `asset_nbv`, `asset_nbv_variance`)
VALUES ('$asset_type', '$asset_code_parent', '$asset_code_child', '$asset_description', '$asset_buy_date', '$asset_cost', '$asset_unit_oracle', '$asset_unit_actual', '$asset_unit_variance', '$asset_status', '$asset_location', '$asset_user', '$asset_pic', '$asset_note', '$asset_cost_variance', '$asset_nbv', '$asset_nbv_variance');");

header("Location:/shpplantonline/html/ams_assets.html");
?>