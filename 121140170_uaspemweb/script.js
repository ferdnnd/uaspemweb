document.addEventListener('DOMContentLoaded', function () {
    tampilkanMahasiswa();
});

function simpanMahasiswa() {
    var id = document.getElementById('editId').value;
    var nama = document.getElementById('nama').value;
    var nim = document.getElementById('nim').value;
    var jurusan = document.getElementById('jurusan').value;

    if (nama && nim && jurusan) {
        if (id) {
            // Edit data
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    tampilkanMahasiswa();
                    document.getElementById('formMahasiswa').reset();
                    document.getElementById('editId').value = '';
                }
            };
            xhr.open('POST', 'server.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send('editId=' + id + '&nama=' + nama + '&nim=' + nim + '&jurusan=' + jurusan);
        } else {
            // Tambah data
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    tampilkanMahasiswa();
                    document.getElementById('formMahasiswa').reset();
                }
            };
            xhr.open('POST', 'server.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send('nama=' + nama + '&nim=' + nim + '&jurusan=' + jurusan);
        }
    }
}

function editMahasiswa(id, nama, nim, jurusan) {
    document.getElementById('editId').value = id;
    document.getElementById('nama').value = nama;
    document.getElementById('nim').value = nim;
    document.getElementById('jurusan').value = jurusan;
}

function hapusMahasiswa(id) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            tampilkanMahasiswa();
            document.getElementById('formMahasiswa').reset();
            document.getElementById('editId').value = '';
        }
    };
    xhr.open('POST', 'server.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('hapusId=' + id);
}

function tampilkanMahasiswa() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('daftarMahasiswa').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'server.php', true);
    xhr.send();
}
