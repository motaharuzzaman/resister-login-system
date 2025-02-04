function showForm(type) {
  document.getElementById("registerForm").classList.add("d-none");
  document.getElementById("loginForm").classList.add("d-none");

  if (type === "register") {
    document.getElementById("registerForm").classList.remove("d-none");
  } else if (type === "login") {
    document.getElementById("loginForm").classList.remove("d-none");
  }
}

function register() {
  const fullname = document.getElementById("regFullname").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  if (!fullname) {
    alert("Please Enter your Full Name");
    return;
  }
  if (!email) {
    alert("Please Enter your Email");
    return;
  }
  if (!password) {
    alert("Please Enter your Password");
    return;
  }

  const user = { fullname, email, password };
  localStorage.setItem(email, JSON.stringify(user))
  alert("Registration Successful!! You can login now.")

  document.getElementById("regFullname").value = '';
  document.getElementById("regEmail").value = '';
  document.getElementById("regPassword").value = '';

  showForm('login');
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email) {
        alert("Email required");
        return;
      }
      if (!password) {
        alert("Password required");
        return;
      }

      const user = localStorage.getItem(email)
      console.log(user)
      
      if (!user) {
        alert("User not exists!")
      }

      const perseUser = JSON.parse(user)
      
      if (password !=perseUser.password) {
        alert("Incorrect Password")
        return;
      }

      alert("Login Successful!! Welcome " + perseUser.fullname)

      document.getElementById('loginEmail').value = '';
      document.getElementById('loginPassword').value = '';
}
