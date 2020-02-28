<?php
include'shpams_koneksi.php';
if (isset($_GET)){
$id   = $_GET['asset_code_child'];
}
$query_mysql = mysqli_query($conn, "SELECT * FROM plant_asset WHERE asset_code_child ='$id'") or die(mysql_error());
while ($data = mysqli_fetch_array($query_mysql)) {
?>

<html>

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Edit data personil 5P">
    <meta name="keywords" content="audit 5p online,audit,5p,auditor,auditee,produksi,officeplant,kalbe nutritionals,sanghiang perkasa">
    <meta name="author" content="Nandang Duryat">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ubah Asset</title>
    <link rel="stylesheet" type="text/css" href="/shpplantonline/stylesheet/style_index.css" />
    <link rel="stylesheet" type="text/css" href="/shpplantonline/stylesheet/top_nav.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/font-awesome.min.css">
    <link rel="shortcut icon" type="image/png" href="/shpplantonline/res/fav/aea.png" />
    <script src="/shpplantonline/javascript/js_index.js"></script>
    <script src="/shpplantonline/javascript/jquery-3.4.1.min.js"></script>
    <script src="/shpplantonline/javascript/js_scroll_to_top.js"></script>
</head>

<body>
    <!--TopNav-->
    <div class="topnav" id="myTopnav">
        <a href="/shpplantonline/html/index.html"><i class="fa fa-home"></i> Home</a>
        <a href="/shpplantonline/html/registrasi.html"><i class="fa fa-user-plus"></i> Tambah User</a>
        <a href="" class="active"><i class="fa fa-users"></i> Edit Asset</a>
        <a href="/shpplantonline/html/ams_assets.html"><i class="fa fa-users"></i> Asset Terdaftar</a>
        <a href="/shpplantonline/html/ams_deleted_assets.html"><i class="fa fa-users"></i> Asset Sampah</a>
        <a href="javascript:void(0);" class="icon" onclick="topNav()">
            <i class="fa fa-bars"></i>
        </a>
    </div>
    <div class="container">
        <form action="/shpplantonline/php/ams_update.php" method="post">
            <div class="row">
                <div class="col-25">
                    <label for="asset_code_child">Fixed Asset Code Child (RFID)</label>
                </div>
                <div class="col-75">
                    <input class="uppercase" id="asset_code_child" type="text" maxlength="20" name="asset_code_child" value="<?php echo $data['asset_code_child']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="asset_type">Jenis</label>
                </div>
                <div class="col-75">
                    <input class="uppercase" id="asset_type" type="text" maxlength="30" name="asset_type" value="<?php echo $data['asset_type']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="asset_code_parent">Fixed Asset Code Parent</label>
                </div>
                <div class="col-75">
                    <input class="uppercase" id="asset_code_parent" type="text" maxlength="20" name="asset_code_parent" maxlength="30" value="<?php echo $data['asset_code_parent']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="asset_description">Asset Description</label>
                </div>
                <div class="col-75">
                    <textarea class="sentencecase" id="asset_description" type="text" name="asset_description" maxlength="500" rows="2"><?php echo $data['asset_description']; ?></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="asset_buy_date">Tanggal Beli</label>
                </div>
                <div class="col-75">
                    <input id="asset_buy_date" type="date" name="asset_buy_date" value="<?php echo $data['asset_buy_date']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="asset_cost">Cost</label>
                </div>
                <div class="col-75">
                    <input id="asset_cost" type="number" name="asset_cost" value="<?php echo $data['asset_cost']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="asset_unit_oracle">Unit Oracle</label>
                </div>
                <div class="col-75">
                    <input id="asset_unit_oracle" type="number" name="asset_unit_oracle" value="<?php echo $data['asset_unit_oracle']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="asset_unit_actual">Unit Aktual</label>
                </div>
                <div class="col-75">
                    <input id="asset_unit_actual" type="number" name="asset_unit_actual" value="<?php echo $data['asset_unit_actual']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="asset_unit_variance">Unit Selisih</label>
                </div>
                <div class="col-75">
                    <input id="asset_unit_variance" type="number" name="asset_unit_variance" value="<?php echo $data['asset_unit_variance']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="asset_status">Status</label>
                </div>
                <div class="col-75">
                    <input class="uppercase" id="asset_status" type="text" name="asset_status" maxlength="25" value="<?php echo $data['asset_status']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="asset_location">Lokasi</label>
                </div>
                <div class="col-75">
                    <input class="uppercase" id="asset_location" type="text" name="asset_location" maxlength="30" value="<?php echo $data['asset_location']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="asset_user">Pengguna</label>
                </div>
                <div class="col-75">
                    <input class="capitalize" id="asset_user" type="name" name="asset_user" maxlength="50" value="<?php echo $data['asset_user']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="asset_pic">Penanggung Jawab</label>
                </div>
                <div class="col-75">
                    <input class="capitalize" id="asset_pic" type="name" name="asset_pic" maxlength="50" value="<?php echo $data['asset_pic']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="asset_note">Keterangan</label>
                </div>
                <div class="col-75">
                    <textarea class="sentencecase" id="asset_note" type="text" name="asset_note" maxlength="1000" rows="3"><?php echo $data['asset_note']; ?></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="asset_cost_variance">Cost (Selisih)</label>
                </div>
                <div class="col-75">
                    <input id="asset_cost_variance" type="number" name="asset_cost_variance" value="<?php echo $data['asset_cost_variance']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="asset_nbv">Asset NBV</label>
                </div>
                <div class="col-75">
                    <input id="asset_nbv" type="number" name="asset_nbv" value="<?php echo $data['asset_nbv']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="asset_nbv_variance">Asset NBV (Selisih)</label>
                </div>
                <div class="col-75">
                    <input id="asset_nbv_variance" type="number" name="asset_nbv_variance" value="<?php echo $data['asset_nbv_variance']; ?>">
                </div>
            </div>
            <div class="row">
                <br>
                <input id="submit" type="submit" value="Update">
            </div>
        </form>
    </div>
</body>

</html>

<?php
}
?>