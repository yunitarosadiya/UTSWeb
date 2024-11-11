<?php
$host = 'localhost';
$db = 'catatan_pengeluaran';
$user = 'root';
$pass = '';

$conn = new mysqli($host, $user, $pass, $db);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tanggal = $_POST['tanggal'];
    $kategori = $_POST['kategori'];
    $jumlah = $_POST['jumlah'];

    $stmt = $conn->prepare("INSERT INTO pengeluaran (tanggal, kategori, jumlah) VALUES (?, ?, ?)");
    $stmt->bind_param("ssd", $tanggal, $kategori, $jumlah);
    $stmt->execute();
    $stmt->close();

    header("Location: index.html");
    exit();
}
?>
