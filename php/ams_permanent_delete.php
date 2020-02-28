<?php
include'shpams_koneksi.php';
//nilai variable diambil dari tag name
//$person_id = $_POST[""]
//ucfirst() Contoh satu
//lcfirst() cONTOH DUA
//strtoupper() CONTOH TIGA
//strtolower() contoh empat
//ucwords() Contoh Lima
if (isset($_GET)){
$id   = $_GET['asset_code_child'];
}

mysqli_query($conn, "SELECT * FROM deleted_plant_asset");
mysqli_query($conn, "DELETE FROM deleted_plant_asset WHERE deleted_plant_asset.asset_code_child='$id'") or die(mysql_error());
header("location:/shpplantonline/html/ams_deleted_assets.html");
?>