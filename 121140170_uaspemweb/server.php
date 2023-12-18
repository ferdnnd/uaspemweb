<?php
$koneksi = mysqli_connect("localhost", "root", "", "mahasiswa_db");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['editId'])) {
        // Edit data
        $id = $_POST['editId'];
        $nama = $_POST['nama'];
        $nim = $_POST['nim'];
        $jurusan = $_POST['jurusan'];

        $query = "UPDATE mahasiswa SET nama='$nama', nim='$nim', jurusan='$jurusan' WHERE id=$id";
        mysqli_query($koneksi, $query);
    } elseif (isset($_POST['hapusId'])) {
        // Hapus data
        $id = $_POST['hapusId'];

        $query = "DELETE FROM mahasiswa WHERE id=$id";
        mysqli_query($koneksi, $query);
    } else {
        // Tambah data
        $nama = $_POST['nama'];
        $nim = $_POST['nim'];
        $jurusan = $_POST['jurusan'];

        $query = "INSERT INTO mahasiswa (nama, nim, jurusan) VALUES ('$nama', '$nim', '$jurusan')";
        mysqli_query($koneksi, $query);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = "SELECT * FROM mahasiswa";
    $result = mysqli_query($koneksi, $query);

    while ($row = mysqli_fetch_assoc($result)) {
        echo "<li>" . $row['nama'] . " - " . $row['nim'] . " - " . $row['jurusan'] . " | ";
        echo "<a href='javascript:void(0)' onclick='editMahasiswa(" . $row['id'] . ", \"" . $row['nama'] . "\", \"" . $row['nim'] . "\", \"" . $row['jurusan'] . "\")'>Edit</a> | ";
        echo "<a href='javascript:void(0)' onclick='hapusMahasiswa(" . $row['id'] . ")'>Hapus</a></li>";
    }
}
?>
