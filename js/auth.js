function login() {

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // DATA USER (contoh)
  if (username === "admin" && password === "123") {
    window.location.href = "admin.html";
  }

  else if (username === "wali7a" && password === "123") {
    window.location.href = "wali.html";
  }

  else if (username === "guru" && password === "123") {
    window.location.href = "guru.html";
  }

  else if (username === "pimpinan" && password === "123") {
    window.location.href = "pimpinan.html";
  }

  else {
    alert("Username atau password salah");
  }
}
