// Load pengeluaran dari server dan tampilkan di tabel
function loadPengeluaran() {
    fetch('get_expenses.php')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector("#tabelPengeluaran tbody");
            tbody.innerHTML = '';
            let totalAmount = 0;
            
            data.forEach(item => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${item.tanggal}</td>
                    <td>${item.kategori}</td>
                    <td>Rp ${parseFloat(item.jumlah).toFixed(2)}</td>
                `;
                tbody.appendChild(row);
                totalAmount += parseFloat(item.jumlah);
            });
            
            document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
        });
}

// Filter pengeluaran berdasarkan kategori
document.getElementById("filterKategori").addEventListener("input", function() {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll("#tabelPengeluaran tbody tr");
    rows.forEach(row => {
        const kategori = row.children[1].textContent.toLowerCase();
        row.style.display = kategori.includes(filter) ? "" : "none";
    });
});

// Panggil loadPengeluaran saat halaman pertama kali dibuka
window.onload = loadPengeluaran;
