<!DOCTYPE html>
<html>
<head>
	<title>Import Data Asset</title>
</head>
<body>
	<style type="text/css">
	body{
		font-family: sans-serif;
	}

	p{
		color: green;
	}
</style>
<h2>Upload Excel file yang berformat .xls (Ms. Excel 97-2003)</h2>
<br/>
<?php 
include ($_SERVER['DOCUMENT_ROOT'].'/shpplantonline/php/shpams_koneksi.php');
?>
<form method="post" enctype="multipart/form-data" action="ams_upload_excel.php">
	Pilih File: 
	<input name="file_asset" type="file" required="required"> 
	<input name="upload" type="submit" value="Import">
</form>

</body>
</html>