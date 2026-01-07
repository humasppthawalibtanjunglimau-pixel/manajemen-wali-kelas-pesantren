<script>
  tampilkan();

  var nama = [];
  var nilai = [];

  dataSiswa.forEach(function(s) {
    if (s.kelas === kelasLogin) {
      nama.push(s.nama);
      nilai.push(parseInt(s.nilai));
    }
  });

  if (nama.length > 0) {
    var ctx = document.getElementById("grafikNilai").getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: nama,
        datasets: [{
          label: "Nilai Siswa",
          data: nilai
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }
</script>

