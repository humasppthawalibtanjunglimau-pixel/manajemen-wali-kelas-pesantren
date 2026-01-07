function login() {

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    alert("Login gagal");
    return;
  }

  // SIMPAN DATA LOGIN
  localStorage.setItem("role", user.role);
  localStorage.setItem("kelas", user.kelas || "");

  // ARAHKAN SESUAI ROLE
  if (user.role === "admin") {
    window.location.href = "admin.html";
  }
  else if (user.role === "wali") {
    window.location.href = "wali.html";
  }
  else if (user.role === "guru") {
    window.location.href = "guru.html";
  }
  else {
    window.location.href = "pimpinan.html";
  }
}
