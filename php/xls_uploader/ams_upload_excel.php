<!-- import excel ke mysql -->
<!-- www.malasngoding.com -->

<?php 
// menghubungkan dengan koneksi
include ($_SERVER['DOCUMENT_ROOT'].'/shpplantonline/php/shpams_koneksi.php');
// menghubungkan dengan library excel reader
include ($_SERVER['DOCUMENT_ROOT'].'/shpplantonline/php/libraries/excel_reader2.php');
?>

<?php
// upload file xls
/* foreach ($_FILES['file_asset']['error'] as $key => $error) {
  if ($error == UPLOAD_ERR_OK) {
    $tempFile = $_FILES['file_asset']['tmp_name'][$key];
    $target = basename($_FILES['file_asset']['name'][$key]) ;
    move_uploaded_file($tempFile, "/var/www/php/xls_uploader/$target");
  }
} */
$target = basename($_FILES['file_asset']['name']) ;
move_uploaded_file($_FILES['file_asset']['tmp_name'], $target);
// beri permisi agar file xls dapat di baca
chmod($_FILES['file_asset']['name'],0777);

// mengambil isi file xls
$data = new Spreadsheet_Excel_Reader($_FILES['file_asset']['name'],false);
// menghitung jumlah baris data yang ada
$jumlah_baris = $data->rowcount($sheet_index=0);

// jumlah default data yang berhasil di import
$berhasil = 0;
for ($i=2; $i<=$jumlah_baris; $i++){

	// menangkap data dan memasukkan ke variabel sesuai dengan kolumnya masing-masing
	$asset_number		= $data->val($i, 1);
	$asset_type			= $data->val($i, 2);
	$asset_parent		= $data->val($i, 3);
  $asset_child		= $data->val($i, 4);
  $asset_desc			= $data->val($i, 5);
  $asset_buy_date	= $data->val($i, 6);
  $asset_cost			= $data->val($i, 7);
  $asset_oracle		= $data->val($i, 8);
  $asset_actual		= $data->val($i, 9);
  $asset_variance	= $data->val($i, 10);
  $asset_status		= $data->val($i, 11);
  $asset_location	= $data->val($i, 12);
  $asset_user			= $data->val($i, 13);
  $asset_pic			= $data->val($i, 14);
  $asset_note			= $data->val($i, 15);
  $asset_cost_var	= $data->val($i, 16);
  $asset_nbv			= $data->val($i, 17);
  $asset_nbv_var	= $data->val($i, 18);

	if($asset_number != ""){
		// input data ke database (table plant_asset)
		mysqli_query($conn, "INSERT INTO plant_asset VALUES ('$asset_type', '$asset_parent', '$asset_child', '$asset_desc', '$asset_buy_date', '$asset_cost', '$asset_oracle', '$asset_actual', '$asset_variance', '$asset_status', '$asset_location', '$asset_user', '$asset_pic', '$asset_note', '$asset_cost_var', '$asset_nbv', '$asset_nbv_var');");
		$berhasil++;
	}
}

// hapus kembali file .xls yang di upload tadi
unlink($_FILES['file_asset']['name']);

setcookie ($asset_child,"", 1);
setcookie ($asset_child, false);
unset($_COOKIE[$asset_child]);

// alihkan halaman ke index.php
header("location: /shpplantonline/html/ams_assets.html?berhasil=$berhasil");
?>