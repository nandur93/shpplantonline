<?php
$conn = new mysqli('localhost', 'root', 'admin', 'shpplantonline') 
or die ('Cannot connect to db');
    $result = $conn->query("select person_sname from person");
    while ($row = $result->fetch_assoc()) {
                  unset($name);
                  $name = $row['person_sname'];
                  echo '<option value="" disabled selected hidden>Pilih inisial auditor</option>';
                  echo '<option value="'.$name.'">'.$name.'</option>';
}
?>