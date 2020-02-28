<?php
echo '<html>';
echo '<head>';
echo '<link rel="stylesheet" type="text/css" href="/shpplantonline/stylesheet/style_index.css" />';
echo '<script src="/shpplantonline/javascript/js_index.js"></script>';
echo '</head>';
echo '<body>';
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect('localhost', 'root', 'admin', 'shpplantonline');

// Check connection
if ($link === false) {
    die('ERROR: Could not connect. ' . mysqli_connect_error());
}

// Attempt select query execution
$sql = 'SELECT * FROM plant_person';
if ($result = mysqli_query($link, $sql)) {
    if (mysqli_num_rows($result) > 0) {
        echo '<div style="overflow-x:auto";>';
        echo '<table>';
        echo '<tr>';
        echo '<th class="id">ID</th>';
        echo '<th>NIK</th>';
        echo '<th>Inisial Auditor</th>';
        echo '<th>Nama Auditor</th>';
        echo '<th>Tanggal Pendaftaran</th>';
        echo '<th>Department</th>';
        echo '<th>Action</th>';
        echo '</tr>';
        while ($row = mysqli_fetch_array($result)) {
            echo '<tr>';
            echo '<td class="id">' . $row['person_ID'] . '</td>';
            echo '<td>' . $row['person_nik'] . '</td>';
            echo '<td>' . $row['person_sname'] . '</td>';
            echo '<td>' . $row['person_name'] . '</td>';
            echo '<td>' . $row['person_registered'] . '</td>';
            echo '<td>' . $row['person_dept'] . '</td>';
            //echo "<td>" . $row['passkey'] . "</td>";
            echo '<td><a class="acyan" href="/shpplantonline/php/edit.php?person_id='.$row['person_ID'].'">Edit</a> | <a class="ared" href="/shpplantonline/php/delete.php?person_id='.$row['person_ID'].'" onClick="return confirm (\'Hapus data user?\');">Delete</a></td></tr>';
            echo '</tr';
        }
        echo '</table>';
        echo '</div>';
        // Free result set
        mysqli_free_result($result);
    } else {
        echo 'Database kosong! <a class="acyan" href="/shpplantonline/html/registrasi.html">Tambahkan User</a>';
    }
} else {
    echo 'ERROR: Could not able to execute $sql. ' . mysqli_error($link);
}

// Close connection
mysqli_close($link);
echo '</body>';
echo '</html>';
?>