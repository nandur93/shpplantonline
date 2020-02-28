<?php
include'shpams_koneksi.php';
// nilai variable diambil dari tag name
// $person_id = $_POST[""]
// ucfirst() Contoh satu
// lcfirst() cONTOH DUA
// strtoupper() CONTOH TIGA
// strtolower() contoh empat
// ucwords() Contoh Lima
if (isset($_GET)){
$id   = $_GET['asset_code_child'];
}
// Fungsi untuk mencopy data ke table plant_asset
mysqli_query($conn, "SELECT * FROM plant_asset");
mysqli_query($conn, "INSERT INTO `plant_asset` (`asset_type`, `asset_code_parent`, `asset_code_child`, `asset_description`, `asset_buy_date`, `asset_cost`, `asset_unit_oracle`, `asset_unit_actual`, `asset_unit_variance`, `asset_status`, `asset_location`, `asset_user`, `asset_pic`, `asset_note`, `asset_cost_variance`, `asset_nbv`, `asset_nbv_variance`) SELECT `asset_type`, `asset_code_parent`, `asset_code_child`, `asset_description`, `asset_buy_date`, `asset_cost`, `asset_unit_oracle`, `asset_unit_actual`, `asset_unit_variance`, `asset_status`, `asset_location`, `asset_user`, `asset_pic`, `asset_note`, `asset_cost_variance`, `asset_nbv`, `asset_nbv_variance` FROM deleted_plant_asset WHERE `asset_code_child`='$id'");

mysqli_query($conn, "SELECT * FROM deleted_plant_asset");
mysqli_query($conn, "DELETE FROM deleted_plant_asset WHERE deleted_plant_asset.asset_code_child='$id'") or die(mysql_error());

header("location:/shpplantonline/html/ams_deleted_assets.html");
?>