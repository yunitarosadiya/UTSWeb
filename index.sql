CREATE DATABASE catatan_pengeluaran;
USE catatan_pengeluaran;

CREATE TABLE pengeluaran (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tanggal DATE,
    kategori VARCHAR(100),
    jumlah DECIMAL(10, 2)
);
