var dataSiswa = JSON.parse(localStorage.getItem("dataSiswa"));

if (!dataSiswa) {
  dataSiswa = [
    { nama: "Ahmad Fauzi", kelas: "VII A", nilai: 85 },
    { nama: "Muhammad Rizki", kelas: "VII A", nilai: 88 },
    { nama: "Aisyah", kelas: "VII B", nilai: 90 }
  ];

  localStorage.setItem("dataSiswa", JSON.stringify(dataSiswa));
}
