<?php
//variable untuk koneksi
$host = "localhost";
$user = "root";
$pass = "admin";
$database = "shpams";
$conn = mysqli_connect($host,$user,$pass);
$db = mysqli_select_db($conn, $database);
/* if($conn){
	echo "Koneksi host berhasil.<br>";
}else{
	echo "Koneksi host gagal.<br>";
}
if($db){
	echo "Koneksi database berhasil.<br>";
}else{
	echo "Koneksi database gagal.<br>";
} */
?>