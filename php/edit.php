<?php
$link = mysqli_connect("localhost", "root", "admin", "shpplantonline");
if (isset($_GET)){
$id   = $_GET['person_id'];
}
$query_mysql = mysqli_query($link, "SELECT * FROM plant_person WHERE person_ID ='$id'") or die(mysql_error());
while ($data = mysqli_fetch_array($query_mysql)) {
?>

<html>

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Edit data personil 5P">
    <meta name="keywords" content="audit 5p online,audit,5p,auditor,auditee,produksi,officeplant,kalbe nutritionals,sanghiang perkasa">
    <meta name="author" content="Nandang Duryat">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar Personil Audit 5P Online</title>
    <link rel="stylesheet" type="text/css" href="/shpplantonline/stylesheet/style_index.css" />
    <link rel="stylesheet" type="text/css" href="/shpplantonline/stylesheet/top_nav.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/font-awesome.min.css">
    <link rel="shortcut icon" type="image/png" href="/shpplantonline/res/fav/aea.png" />
</head>

<body>
    <!--TopNav-->
    <div class="topnav" id="myTopnav">
        <a href="/shpplantonline/html/index.html"><i class="fa fa-home"></i> Home</a>
        <a href="/shpplantonline/html/registrasi.html" class="active"><i class="fa fa-user-plus"></i> Edit User</a>
        <a href="/shpplantonline/html/users.html"><i class="fa fa-users"></i> User Terdaftar</a>
        <a href="javascript:void(0);" class="icon" onclick="topNav()">
            <i class="fa fa-bars"></i>
        </a>
    </div>
    <div class="container">
        <form action="/shpplantonline/php/update.php" method="post">
            <div class="row">
                <div class="col-25">
                    <!--Name-->
                    <label for="idid">ID</label>
                </div>
                <div class="col-75">
                    <input class="capitalize" id="idid" type="number" maxlength="5" name="id" required value="<?php echo $data['person_ID']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <!--Name-->
                    <label for="idname">Nama Lengkap</label>
                </div>
                <div class="col-75">
                    <input class="capitalize" id="idname" type="name" maxlength="30" name="name" required value="<?php echo $data['person_name']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <!--Inisial-->
                    <label for="idsname">Inisial</label>
                </div>
                <div class="col-75">
                    <input class="uppercase" id="idsname" type="text" maxlength="3" name="sname" required value="<?php echo $data['person_sname']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <!--Password-->
                    <label for="idpassword">Password</label>
                </div>
                <div class="col-75">
                    <input id="idpassword" type="password" name="password" required minlength="6" maxlength="8" value="<?php echo $data['person_password']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <!--Repeat Password-->
                    <label for="idrepeatpassword">Ulangi Password</label>
                </div>
                <div class="col-75">
                    <input id="idrepeatpassword" type="password" name="repeatpassword" required minlength="6" maxlength="8">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <!--Nik-->
                    <label for="date">NIK</label>
                </div>
                <div class="col-75">
                    <input class="uppercase" id="idnik" type="text" name="nik" required maxlength="10" value="<?php echo $data['person_nik']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <!--Dept-->
                    <label for="iddept">Department</label>
                </div>
                <div class="col-75">
                    <input id="iddept" type="text" name="dept" required maxlength="30" value="<?php echo $data['person_dept']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <!--Div-->
                    <label for="iddiv">Divisi</label>
                </div>
                <div class="col-75">
                    <input class="capitalize" id="iddiv" type="text" name="div" required maxlength="30" value="<?php echo $data['person_div']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <!--Number-->
                    <label for="idnumber">No. HP</label>
                </div>
                <div class="col-75">
                    <input id="idnumber" type="number" name="number" maxlength="14" value="<?php echo $data['person_number']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <!--Quote-->
                    <label for="idquote">Quote</label>
                </div>
                <div class="col-75">
                    <input id="idquote" type="text" name="quote" maxlength="100" value="<?php echo $data['person_quote']; ?>">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <!--Tanggal Pendaftaran-->
                    <label for="idregistered">Tanggal Pendaftaran</label>
                </div>
                <div class="col-75">
                    <input id="idregistered" type="date" name="date" required value="<?php echo $data['person_registered']; ?>">
                </div>
            </div>
            <div class="row">
                <br>
                <input id="submit" type="submit" value="Update">
            </div>
        </form>
    </div>
    <script src="/shpplantonline/javascript/js_index.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
</body>

</html>

<?php
}
?>