const API_BASE = "http://localhost:5000";

async function doSignup() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorEl  = document.getElementById("login-error");
  errorEl.style.display = "none";
  // TODO: Read name, email, username and password from the form inputs

  // TODO: Validate the fields, then POST { name, email, username, password } to /register
  // TODO: Handle success (redirect to login.html) and failure appropriately
}

document.addEventListener("keydown", (e) => { if (e.key === "Enter") doSignup(); });
