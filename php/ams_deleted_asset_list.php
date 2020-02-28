<?php
include'shpams_koneksi.php';
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */

// Check connection
if ($conn === false) {
    die('ERROR: Could not connect. ' . mysqli_connect_error());
}
function rupiah($angka){
    $hasil_rupiah = "Rp ".number_format($angka,2,',','.');
    return $hasil_rupiah;
}
$no = 1;
// Attempt select query execution
$sql = 'SELECT * FROM deleted_plant_asset';
if ($result = mysqli_query($conn, $sql)) {
    if (mysqli_num_rows($result) > 0) {
        //echo '<input oninput="w3.filterHTML(\'#id01\', \'.item\', this.value)" placeholder="Cari asset...">';
        echo '<div style="overflow-x:auto";>';
            echo '<table id="id01">';
                echo '<tr>';
                    echo '<th class="id" onclick="sortTable(0)">No</th>';
                    echo '<th onclick="sortTable(1)">Jenis</th>';
                    //echo '<th onclick="sortTable(2)">Fixed Asset Code Parent</th>';
                    echo '<th onclick="sortTable(3)">Fixed Asset Code Child</th>';
                    echo '<th onclick="sortTable(4)">Asset Description</th>';
                    //echo '<th onclick="sortTable(5)">Tanggal Beli</th>';
                    echo '<th onclick="sortTable(6)">Cost</th>';
                    //echo '<th onclick="sortTable(7)">Unit Oracle</th>';
                    //echo '<th onclick="sortTable(8)">Unit Aktual</th>';
                    //echo '<th onclick="sortTable(9)">Unit Selisih</th>';
                    echo '<th onclick="sortTable(10)">Status</th>';
                    echo '<th onclick="sortTable(11)">LOKASI</th>';
                    echo '<th onclick="sortTable(12)">Pengguna</th>';
                    echo '<th onclick="sortTable(13)">Penanggung Jawab</th>';
                    //echo '<th onclick="sortTable(14)">Keterangan</th>';
                    //echo '<th onclick="sortTable(15)">Cost (Selisih)</th>';
                    //echo '<th onclick="sortTable(16)">NBV</th>';
                    //echo '<th onclick="sortTable(17)">NBV (Selisih)</th>';
                    echo '<th colspan="2">Action</th>';
                echo '</tr>';
                while ($row = mysqli_fetch_array($result)) {
                echo '<tr class="item">';
                    echo '<td class="id">'.$no++.'</td>';
                    echo '<td>'.$row['asset_type'].'</td>';
                    //echo '<td>'.$row['asset_code_parent'].'</td>';
                    echo '<td>'.$row['asset_code_child'].'</td>';
                    echo '<td class="desc">'.$row['asset_description'].'</td>';
                    //echo '<td>'.$row['asset_buy_date'].'</td>';
                    echo '<td>'.rupiah($row['asset_cost']).'</td>';
                    //echo '<td>'.$row['asset_unit_oracle'].'</td>';
                    //echo '<td>'.$row['asset_unit_actual'].'</td>';
                    //echo '<td>'.$row['asset_unit_variance'].'</td>';
                    echo '<td>'.$row['asset_status'].'</td>';
                    echo '<td>'.$row['asset_location'].'</td>';
                    echo '<td>'.$row['asset_user'].'</td>';
                    echo '<td>'.$row['asset_pic'].'</td>';
                    //echo '<td class="desc">'.$row['asset_note'].'</td>';
                    //echo '<td>'.rupiah($row['asset_cost_variance']).'</td>';
                    //echo '<td>'.rupiah($row['asset_nbv']).'</td>';
                    //echo '<td>'.rupiah($row['asset_nbv_variance']).'</td>';
                    echo '<td><a class="acyan" href="/shpplantonline/php/ams_restore.php?asset_code_child='.$row['asset_code_child'].'">Restore</a></td>';
                    echo '<td><a class="ared" href="/shpplantonline/php/ams_permanent_delete.php?asset_code_child='.$row['asset_code_child'].'" onClick="return confirm (\'Hapus data asset?\');">Delete Permanen</a></td></tr>';
                echo '</tr>';
            }
            echo '</table>';
        echo '</div>';
        // Free result set
        mysqli_free_result($result);
    } else {
        echo 'Tidak ada asset sampah!';
    }
} else {
    echo 'ERROR: Could not able to execute $sql. ' . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);
?>