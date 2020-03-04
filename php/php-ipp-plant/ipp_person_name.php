<?php
// header('Content-Type: application/json');
include($_SERVER['DOCUMENT_ROOT'] . '/shpplantonline/php/connections/shpplantonline_conn.php');
   
$sql = "SELECT ipp_person_name, ipp_gen_com FROM plant_ipp";
$result = $conn->query($sql);

// if ($result->num_rows > 0) {
//     // output data of each row
//     while($row = $result->fetch_assoc()) {
//         echo $row["ipp_gen_com"];
//         echo $row["ipp_person_name"];
//     }
// } else {
//     echo "0 results";
// }
// $conn->close();
